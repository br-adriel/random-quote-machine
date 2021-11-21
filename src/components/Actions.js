import "./Actions.css";

const Actions = (props) => {
  const tweetURL = ``;
  const tumblrURL = ``;

  return (
    <div className="actions">
      <div>
        <a
          href={tweetURL}
          id="tweet-quote"
          target="_blank"
          title="Tweet quote"
          className={"btn bg0"}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          id="tumblr-quote"
          className={"btn bg0"}
          href={tumblrURL}
          title="Post on Tumblr"
        >
          <i class="fab fa-tumblr"></i>
        </a>
      </div>
      <a id="new-quote" className={"btn bg0"} title="New quote" onClick="">
        New quote
      </a>
    </div>
  );
};

export default Actions;
