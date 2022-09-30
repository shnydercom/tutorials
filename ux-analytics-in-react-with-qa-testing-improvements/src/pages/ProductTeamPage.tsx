import UserPage from "./UserPage";

export const ProductTeamPage = () => {
  const emptyCallback = () => {};
  return (
    <div className="product-team">
      <div className="how-to">
        <h2>The code works, does the product?</h2>
        Questions like...
        <ul>
          <li>
            "which language do we put first, which is most important for our
            users?"
          </li>
          <li>
            "Do users only read one language, should we deactivate the others?"
          </li>
          <li>"How long do users stay on individual sections of the site?"</li>
          <li>"Should we add a scroll-to-top button?"</li>
          <li>"Do people really try that button at the end?"</li>
        </ul>
        ...don't always have a definite answer. For solid arguments, UX data and
        its interpretation will help you build better UIs
        <h2>The Product/Service perspective</h2>
        We want to include non-technical people in our teams, who mostly see the
        pages like the users do. With this "product perspective" we can inspect
        the invisible side of the page we're testing
        <ul>
          <li>
            <i data-qa-id="highlighted element">(s)</i> are the ones which
            trigger UX events inside the user's page, which helps us understand
            analytics data better
          </li>
          <li>
            The "wrapped" page included below <b>doesn't trigger</b> UX events.
            Analysing the wrapped page will not mess with the data
          </li>
          <li>It shows the same ids that are being used for QA testing</li>
          <li>
            This does <b>not</b> require additional code inside the page we're
            testing
          </li>
        </ul>
        Below you can scroll all the way down to the button, which is also
        highlighted.
      </div>
      <div className="userpage-wrapper">
        <UserPage logDOMeventCallback={emptyCallback} />
      </div>
      <p>
      🕺 And that's it, I hope this tutorial was helpful! Please give feedback and{" "}
        <a href="https://dev.to/shnydercom">find me on dev.to</a> 🧙
      </p>
    </div>
  );
};
