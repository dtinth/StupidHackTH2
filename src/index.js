import React from "react";
import ReactDOM from "react-dom";
import { renderToString } from "react-dom/server";
import { renderStylesToString } from "emotion-server";
import { css, keyframes } from "emotion";
import styled from "react-emotion";
import "./styles.css";

const sponsors = [
  {
    image:
      "https://p-u.popcdn.net/attachments/images/000/010/379/large/scbabacus.png?1530105045"
  },
  {
    image:
      "https://p-u.popcdn.net/attachments/images/000/010/380/large/sellsuki.png?1530105053"
  }
];

const individualSponsors = [
  { name: "Thai Pangsakulyanont" },
  { name: "Jiraporn Changsamlee" }
];

function App() {
  const content = (
    <span>
      สร้างสิ่งของเพี้ยนๆ ที่ไม่มีใครต้องการ และทำไอเดียบ้าๆ บอๆ
      ให้กลายเป็นจริง! งาน Hackathon แบบกี๊คๆ ที่ไม่จำกัดไอเดีย
      ไม่เน้นฝั่งธุรกิจ แต่เน้นความสนุกสำหรับนักพัฒนาแบบเพียวๆ!!
    </span>
  );
  return (
    <Container>
      <Head>
        <HeadContent>
          <HeadText>{content}</HeadText>
          <HeadGradient>{content}</HeadGradient>
        </HeadContent>
      </Head>
      <SectionTitle>Objectives</SectionTitle>
      <Ul>
        <li>
          เราจัดงานนี้เพื่อให้นักพัฒนาได้มาสนุกกันกับการสร้างอะไรที่ตัวเองอยากสร้าง
          โดยไม่ต้องคำนึงถึงเรื่องธุรกิจใดๆ แต่เพื่อความมันส์ล้วนๆ
        </li>
        <li>
          นอกจากความสนุกแล้ว ผู้ร่วมงานจะได้เรียนรู้และฝึกฝนทักษะ
          จากการลงมือทำจริงๆ
        </li>
        <li>
          เพื่อให้นักพัฒนาได้มาเจอกัน
          และเสริมสร้างชุมชนนักพัฒนาให้แข็งแกร่งยิ่งขึ้น!!
        </li>
      </Ul>
      <SectionTitle>Venue</SectionTitle>
      <Centered>
        <P>
          <a href="http://www.linkbkk.com/" target="_blank">
            <VenueImg src="https://p-u.popcdn.net/attachments/images/000/010/378/large/link.png?1530104099" />
          </a>
        </P>
        <P>
          ขอขอบคุณ{" "}
          <a href="http://www.linkbkk.com/" target="_blank">
            <strong>LINK Collaboration Space</strong>
          </a>{" "}
          ที่สนับสนุนสถานที่ให้เราทำอะไรบ้าๆ บอๆ กัน
        </P>
      </Centered>
      <SectionTitle>Agenda</SectionTitle>
      <Agenda />
      <P>
        * ระหว่างช่วง Hackathon เรามีกิจกรรมให้ผู้ร่วมงานสามารถสนุกด้วยกัน (เช่น{" "}
        <a
          href="https://www.facebook.com/phoomparin.mano/posts/327207191078094"
          target="_blank"
        >
          เล่นดนตรีกัน
        </a>{" "}
        หรือ{" "}
        <a href="https://www.facebook.com/photo.php?fbid=10208707705404202&set=a.1302432655084.36588.1658509977&type=3&theater">
          ไปกินติ่มซำกันตอนตีสาม
        </a>) Throughout the hackathon, we have fun activities to{" "}
        <del>distract the participants</del> keep the atmosphere friendly and
        chill! (These activities are optional, participants may choose to hack
        on their crazy projects.) Examples:
      </P>
      <SectionTitle>$ponsors</SectionTitle>
      <Centered>
        <P>ขอขอบคุณสปอนเซอร์ต่อไปนี้ ที่ทำให้งานนี้เกิดขึ้นมาได้</P>
        {sponsors.map((x, i) => (
          <P>
            <SponsorImg src={x.image} alt={x.name} title={x.name} />
          </P>
        ))}
        <P>และขอขอบคุณ Individual sponsors ที่ร่วมสมทบทุนเพื่อจัดงานนี้ด้วย</P>
        <P>
          {individualSponsors.map((x, i) => (
            <React.Fragment>
              {i > 0 && <br />}
              <strong>{x.name}</strong>
            </React.Fragment>
          ))}
        </P>
        <P>โดยสามารถดูรายรับรายจ่ายทั้งหมดได้ที่</P>
        <P>
          <Buton
            href="https://docs.google.com/spreadsheets/d/11QtOidKwo30pvibBgYHORpFkSNP9kZi7xnJmcsRGX6s/edit?usp=sharing"
            target="_blank"
          >
            Stupid Balance Tracking Sheet
          </Buton>
        </P>
        <P>หากคุณสนใจสนับสนุนงานนี้ กรุณา</P>
        <P>
          <Buton href="https://m.me/StupidHackTH" target="_blank">
            ติดต่อเรา
          </Buton>
        </P>
      </Centered>
      <SectionTitle>RSVP</SectionTitle>
      <Centered>
        <P>
          <Buton
            href="https://www.facebook.com/events/169587413711647/"
            target="_blank"
          >
            Facebook Event
          </Buton>
        </P>
      </Centered>
    </Container>
  );
}

const Container = styled("div")`
  padding: 5%;
`;

const Head = styled("div")`
  font-size: 64px;
  font-weight: bold;
  padding: 10%;
`;

const HeadContent = styled("div")`
  transform: skewY(-10deg) translateZ(0);
  position: relative;
`;

const HeadText = styled("div")`
  color: #fc5a00;
  text-shadow: ${Array(40)
    .fill()
    .map((_, i) => `${i + 1}px ${i + 1}px 0 #802500`)
    .join(", ")};
  -webkit-text-fill-color: transparent;
`;

const HeadGradient = styled("div")`
  background: linear-gradient(to bottom, #fdde02, #fc5a00);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const SectionTitle = styled("h2")`
  margin: 2em 0 0;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`;

const Centered = styled("div")`
  text-align: center;
`;

const P = styled("p")`
  margin: 1em 0 0;
`;
const Ul = styled("ul")`
  margin-top: 1em;
`;

const shake = keyframes`
  from { transform: scale(1); }
  50% { transform: scale(1.05); }
  to { transform: scale(1); }
`;

const Buton = styled("a")`
  text-decoration: none;
  color: navy;
  display: inline-block;
  padding: 2px 16px;
  border: 2px solid navy;
  border-radius: 100px;
  font-weight: bold;
  &:hover {
    background: navy;
    border-color: navy;
    color: #fff;
    animation: ${shake} 0.1s linear infinite;
  }
`;

const VenueImg = styled("img")`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  width: 400px;
  height: auto;
`;

const SponsorImg = styled("img")`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  width: 240px;
  height: auto;
`;

function Agenda() {
  const row = (time, thing) => (
    <tr>
      <td className="time">{time}</td>
      <td className="stuff">{thing}</td>
    </tr>
  );
  return (
    <AgendaTable width="100%">
      <tbody>
        <tr>
          <th colSpan={2}>July 14th</th>
        </tr>
        {row("9:00", "Registration")}
        {row("9:30", "Opening and team matching")}
        {row("10:30", "Hack*")}
        {row("12:00", "Lunch")}
        {row("13:00", "Hack*")}
        {row("18:00", "Dinner")}
        {row("19:00", "Hack*")}
        <tr>
          <th colSpan={2}>July 15th</th>
        </tr>
        {row("0:00", "Hack* (and maybe sleep)")}
        {row("9:00", "Breakfast")}
        {row("10:00", "Hack*")}
        {row("12:00", "Lunch")}
        {row("13:00", "Hack*")}
        {row("15:00", "Presentation")}
        {row("17:30", "Awards and closing")}
      </tbody>
    </AgendaTable>
  );
}
const AgendaTable = styled("table")`
  margin-top: 1em;
  th {
    background: #eee;
  }
  th,
  td {
    padding-left: 5px;
    padding-right: 5px;
  }
  .time {
    width: 25%;
    white-space: nowrap;
  }
`;

const html = renderStylesToString(renderToString(<App />));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <div
      style={{ border: "5px solid #f00", boxSizing: "content-box", width: 674 }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
    <textarea style={{ width: "100%", height: "10em" }} value={html} />
  </div>,
  rootElement
);
