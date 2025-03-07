import "./consultation.css";

const Consultation = () => {
  return (
    <article className="consultation__main">
      <h2>What do I get with a free consultation?</h2>
      <p>
        We will create a report based on objective measures of your website
        through a variety of online tools. This analysis will be coupled with
        our expert subjective reaction to your website's look/feel, usability
        and content.
      </p>
      <br />
      <h5>No obligation.</h5>
      <ul>
        <li>Option 1. Schedule a 30 min zoom call</li>
        <li>Option 2. We can do the analysis and email the result.</li>
      </ul>
      <br />
      <h5>Your analysis contains the following</h5>
      <ul>
        <li>Keyword suggestions</li>
        <li>SEO content check</li>
        <li>Accessibility check</li>
        <li>Look/Feel analysis</li>
        <li>Suggestions and Proposal</li>
      </ul>
    </article>
  );
};

export default Consultation;
