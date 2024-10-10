import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import aniMangaImage from '../images/AniMangaPhoto.png'; 
import outageScraperImage from '../images/OutageScraperPhoto.png'; 
import glucoGuideImage from '../images/GlucoGuidePhoto.png'; 
import networkMonitoringImage from '../images/NetworkToolPhoto.png';
import documentParserImage from '../images/DocumentParserPhoto.png';
import stockPredictionImage from '../images/StockPredictionPhoto.png';
import aniMangaScraperImage from '../images/AniMangaScraperPhoto.png';
import oppfVisualizerImage from '../images/OPPFVisualizerPhoto.png';
import exoplanetAnalysisImage from '../images/ExoplanetAnalysisPhoto.png';

function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row">
          {/* AniManga Converter */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={aniMangaImage} className="card-img-top" alt="AniManga Converter" />
              <div className="card-body">
                <h5 className="card-title">AniManga Converter</h5>
                <p className="card-text">
                  iOS app converting anime episodes into manga chapters using Swift and Python for data handling.
                </p>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="project-tag">Swift</span>
                    <span className="project-tag">SwiftUI</span>
                    <span className="project-tag">Python</span>
                    <span className="project-tag">Google Moble Ads SDK</span>
                    <span className="project-tag">CocoaPods</span>
                  </div>
                  <a href="https://github.com/omgaut/AnimangaConverter" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Power Outage Data Scraper */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={outageScraperImage} className="card-img-top" alt="Power Outage Data Scraper" />
              <div className="card-body">
                <h5 className="card-title">Power Outage Data Scraper</h5>
                <p className="card-text">
                  Utilized Selenium and BS4 to web scrape outage data and upload CSV data to AWS S3 buckets.
                </p>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="project-tag">Python</span>
                    <span className="project-tag">Selenium</span>
                    <span className="project-tag">BeautifulSoup</span>
                    <span className="project-tag">pandas</span>
                    <span className="project-tag">AWS</span>
                  </div>
                  <a href="https://github.com/omgaut/OutageScraper1" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* GlucoGuide */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={glucoGuideImage} className="card-img-top" alt="GlucoGuide" />
              <div className="card-body">
                <h5 className="card-title">GlucoGuide - Health Consulting</h5>
                <p className="card-text">
                  Health consulting platform for diabetes, utilizing TensorFlow and scikit-learn for prediction models.
                </p>
                <div className="project-footer">
                  <div className="project-tags">
                  <span className="project-tag">Python</span>
                    <span className="project-tag">TensorFlow</span>
                    <span className="project-tag">scikit-learn</span>
                    <span className="project-tag">LangChain</span>
                    <span className="project-tag">OpenAI</span>
                  </div>
                  <a href="https://github.com/omgaut/GlucoGuide" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Network Monitoring Tool */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={networkMonitoringImage} className="card-img-top" alt="Network Monitoring Tool" />
              <div className="card-body">
                <h5 className="card-title">Network Monitoring Tool</h5>
                <p className="card-text">
                  A tool to capture and visualize network packet data using Pyshark and JavaScript. Exports data to CSV.
                </p>
                <div className="project-footer">
                  <div className="project-tags">
                  <span className="project-tag">JavaScript</span>
                  <span className="project-tag">HTML/CSS</span>
                    <span className="project-tag">Python</span>
                    <span className="project-tag">PyShark</span>
                    <span className="project-tag">CSV</span>
                    <span className="project-tag">pandas</span>
                  </div>
                  <a href="https://github.com/omgaut/NetworkMonitoringTool" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* OPPF Visualizer */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={oppfVisualizerImage} className="card-img-top" alt="OPPF Visualizer" />
              <div className="card-body">
                <h5 className="card-title">OPPF Visualizer</h5>
                <p className="card-text">
                  Visualized the history and locations of Omega Psi Phi Fraternity using Angular and Bootstrap.
                </p>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="project-tag">TypeScript</span>
                    <span className="project-tag">Angular</span>
                    <span className="project-tag">BootStrap CSS</span>
                    <span className="project-tag">MapBox API</span>
                  </div>
                  <a href="https://github.com/omgaut/OPPF-Visualizer" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* NVDA Stock Price Prediction */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={stockPredictionImage} className="card-img-top" alt="Stock Prediction" />
              <div className="card-body">
                <h5 className="card-title">NVDA Stock Price Prediction</h5>
                <p className="card-text">
                  Implemented an LSTM network to predict NVDA stock prices using historical time-series data
                </p>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="project-tag">Python</span>
                    <span className="project-tag">pandas</span>
                    <span className="project-tag">Matplotlib</span>
                    <span className="project-tag">Tensorflow</span>
                    <span className="project-tag">scikit-learn</span>
                    <span className="project-tag">Numpy</span>
                  </div>
                  <a href="https://github.com/omgaut/StockPricePrediction" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Exoplanet Analysis */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={exoplanetAnalysisImage} className="card-img-top" alt="Exoplanet Analysis" />
              <div className="card-body">
                <h5 className="card-title">Exoplanet Analysis</h5>
                <p className="card-text">
                  Predicted exoplanets that fall within the goldilocks zone based on scraped NASA archive data.
                </p>
                <div className="project-footer">
                  <div className="project-tags">
                  <span className="project-tag">Python</span>
                  <span className="project-tag">Matplotlib</span>
                    <span className="project-tag">Seaborn</span>
                    <span className="project-tag">scikit-learn</span>
                    <span className="project-tag">pandas</span>
                  </div>
                  <a href="https://github.com/omgaut/ExoplanetAnalysis" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* AniManga Scraper */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={aniMangaScraperImage} className="card-img-top" alt="Animanga Scraper" />
              <div className="card-body">
                <h5 className="card-title">AniManga Scraper</h5>
                <p className="card-text">
                  Web scraped the Big 3 Anime's Episode to Manga Conversions, and formatted them into a CSV file.
                </p>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="project-tag">Python</span>
                    <span className="project-tag">pandas</span>
                    <span className="project-tag">Selenium</span>
                    <span className="project-tag">BeautifulSoup</span>
                  </div>
                  <a href="https://github.com/omgaut/AnimangaScraper" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Document Parser */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={documentParserImage} className="card-img-top" alt="Document Parser" />
              <div className="card-body">
                <h5 className="card-title">Document Parser</h5>
                <p className="card-text">
                  Engineered a Langchain LLM model to parse and store documents in a vector database to inform user queries.
                </p>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="project-tag">Python</span>
                    <span className="project-tag">LangChain</span>
                    <span className="project-tag">OpenAI</span>
                  </div>
                  <a href="https://github.com/omgaut/DocumentParser" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
