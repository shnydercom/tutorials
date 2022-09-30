import { Link } from "react-router-dom";

export const IntroPage = () => {
  return (
    <div className="intro-page">
      <div className="product-team">
        <div className="how-to">
          <h2>Welcome</h2>
          Working in a team to build a product? Maybe with non-technical people
          - or technical people who are not developers?
          <br />
          <br />
          You probably...
          <ul>
            <li>...need testing at some point</li>
            <li>...need to explain how a page works, or why it doesn't</li>
            <li>...want to have usage data for that argument</li>
            <li>...want to avoid extra work</li>
          </ul>
          So we'll take a common task you need to do for testing. That task is{" "}
          <b>adding custom attributes</b>. It's independent of the library, be
          it jest, puppeteer, cypress, selenium or others, because it works with
          html attributes. In HTML5, you can add custom attributes, and testing
          libraries use that for identifying elements which aren't necessarily
          unique on a page. Commonly the attribute "data-qa-id" is used, or at
          least it's the one that gives you stackoverflow answers. "data-cy" is
          used in the case of cypress, and others are possible as well.
          <h2>HTML5's "data-qa-id" attributes</h2>
          Good news: You can reuse your Quality Assurance testing for usage
          analysis.
          <p>
            In this tutorial, we'll look at a page for users. <br />
            The page contains nothing but the agile manifesto in different
            languages and a button at the end.
          </p>
          <p>
            We'll see
            <ul>
              <li>how to fire events when the user scrolls and clicks</li>
              <li>How the resulting usage data can be displayed in a chart</li>
              <li>
                how we can give our non-technical colleagues an overview which
                elements on a page are responsible
              </li>
            </ul>
          </p>
          <p>
            Even if you're not doing browser-based testing yet, by including
            these attributes you'll make life easier for a future
            tester-colleague. In the meantime you'll have a couple of reusable
            functions for learning more about your users.
          </p>
          <p>
            Try scrolling through <Link to="/userpage">the user's page</Link>,
            and see the events on <Link to="/analytics">the analytics page</Link>{" "}
             afterwards.
          </p>
        </div>
      </div>
    </div>
  );
};
