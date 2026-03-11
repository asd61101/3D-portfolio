import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack MERN Developer</h4>
                <h5>Softcrust Digital Experts (Full Time) - Rawalpindi</h5>
              </div>
              <h3>Aug 2025 - Dec 2025</h3>
            </div>
            <div className="career-points">
              <ul>
                <li>
                  Reduced backend API latency by 25% through query and schema
                  optimization.
                </li>
                <li>
                  Built reusable React components, cutting development time by
                  30%.
                </li>
                <li>
                  Enhanced UI performance, increasing user engagement by 20%.
                </li>
              </ul>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack MERN Developer</h4>
                <h5>Freelance - Islamabad</h5>
              </div>
              <h3>Jun 2024 - Present</h3>
            </div>
            <div className="career-points">
              <ul>
                <li>
                  Delivered 12+ MERN applications across SaaS, CMS, and booking
                  platforms.
                </li>
                <li>
                  Improved website speed by 30%, boosting session duration and
                  retention.
                </li>
                <li>
                  Implemented role-based authentication, improving application
                  security.
                </li>
              </ul>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Associate Engineer</h4>
                <h5>Code N Thrive Technologies - Rawalpindi</h5>
              </div>
              <h3>Nov 2024 - Aug 2025</h3>
            </div>
            <div className="career-points">
              <ul>
                <li>
                  Built dashboards for AI workflows, increasing data processing
                  speed by 20%.
                </li>
                <li>
                  Optimized microservice communication, reducing latency by 15%.
                </li>
                <li>
                  Containerized services with Docker, enabling zero-downtime
                  deployments.
                </li>
              </ul>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Developer</h4>
                <h5>Uptech Sol (Part-Time) - Islamabad</h5>
              </div>
              <h3>Feb 2024 - Jun 2024</h3>
            </div>
            <div className="career-points">
              <ul>
                <li>
                  Optimized mentor booking workflow, reducing task completion
                  time by 20%.
                </li>
                <li>
                  Enhanced API response speed, improving platform reliability.
                </li>
                <li>
                  Designed responsive interfaces, increasing user engagement by
                  15%.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
