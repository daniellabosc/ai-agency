import "./accordian.css";
import Accordion from "react-bootstrap/Accordion";

const Accordian = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Transcribe audio files from Google Drive using OpenAI Whisper and send
          an email
        </Accordion.Header>
        <Accordion.Body>
          <div className="make_img" id="make1">
            <h2>Scenario Overview</h2>
            <p>
              This scenario transcribes audio files stored in a Google Drive
              folder using OpenAI Whisper and sends the transcription via email.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Accordian;
