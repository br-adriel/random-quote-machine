import "./Actions.css";

const Actions = (props) => {
  const tweetURL = `https://twitter.com/intent/tweet?hashtags=${props.data.tags}&text="${props.data.content}" ${props.data.author}`;
  const tumblrURL = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=${props.data.tags}&caption=${props.data.author}&content=${props.data.content}&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button`;

  return (
    <div className="actions">
      <div>
        <a
          href={tweetURL}
          id="tweet-quote"
          target="_blank"
          title="Tweet quote"
          className={`btn bg${props.classColor}`}
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          id="tumblr-quote"
          className={`btn bg${props.classColor}`}
          href={tumblrURL}
          title="Post on Tumblr"
          rel="noreferrer"
        >
          <i class="fab fa-tumblr"></i>
        </a>
      </div>
      <button
        id="new-quote"
        className={`btn bg${props.classColor}`}
        title="New quote"
        onClick={props.getQuote}
      >
        New quote
      </button>
    </div>
  );
};

export default Actions;
