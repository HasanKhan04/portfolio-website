import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'January-April 2024',
      title: 'Department of National Defence',
      role: 'Software Engineering Intern',
      description: [
        '• Expedited web app development time from <b>3 years to 3 months</b> by creating a <b>Vue.js and Express.js</b> template using domain driven design principles, with <b>Docker</b> containers for enhanced scalability and efficiency',
        '• Developed and deployed a <b>Node.js and Vue.js</b> web app utilized by <b>10,000</b> RCAF members nationwide to facilitate streamlined communication and coordination for link network usage, leveraging <b>Socket.IO</b> for real time updates',
        '• Built <b>REST APIs</b> for seamless backend communication, reducing execution time by <b>30%</b> and wrote <b>Sequelize</b> migration scripts for <b>PostgreSQL</b>',
        '• Deployed <b>Casbin-based RBAC</b>, reducing unauthorized access incidents by <b>75%</b>, and security config time by <b>200%</b>'
      ],
      expanded: false,
    },
    {
      date: 'September-December 2023',
      title: 'University of Waterloo',
      role: 'Software Engineering Intern',
      description: [
        '• Collaborated closely with a professor to implement features for web apps serving <b>5000+</b> researchers and students',
        '• Increased data retrieval speed and accuracy by <b>30%</b> from a <b>MySQL</b> database by optimizing <b>Golang REST APIs</b>, and thoroughly testing with <b>Postman</b>',
        '• Reduced post-deployment issues by <b>45%</b> through implementing over <b>40</b> rigorous unit tests using <b>Jest</b>',
        '• Resolved <b>20+</b> critical <b>React and Next.js</b> bugs, and enhanced accessibility by <b>75%</b> across devices',
        '• Conducted <b>50+</b> code reviews to maintain high code quality standards, utilizing <b>Gitlab</b> for version control'
      ],
      expanded: false,
    },
    {
      date: 'May-September 2023',
      title: 'Adastra Corporation',
      role: 'Software Engineering Intern',
      description: [
        '• Built a chatbot integrated with Microsoft Teams and <b>OpenAI</b>, bought by <b>10</b> clients within <b>2 months</b> of deployment',
        '• Developed a <b>Python</b>-based source-to-target mapping solution leveraging <b>Azure Blob Storage and OpenAI</b> to automate <b>ETL</b>',
        '• Pioneered a POC tool utilizing <b>Microsoft Fabric and OpenAI</b> to generate table-specific sample records from its <b>SQL DDL</b>, with streamlined <b>CI/CD</b> integration through <b>Azure DevOps</b>',
        '• Decreased pipeline loading failures by <b>70%</b> through automating data cleaning using <b>Python and Pandas</b>'
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;