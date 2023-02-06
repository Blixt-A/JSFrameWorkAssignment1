import React, { useState } from 'react'
import portfoliPic from './assets/images/portfolioPic.jpg'
import idePic from './assets/images/idea-pic.jpg'
import desingPic from './assets/images/brooklyn-bridge.jpg'
import './App.css'

const articles = [
  {
    id: 1,
    title: "About Me",
    content: "I study Front End Development at Gamechanger Educations. In programming, I have so far studied html, css, javascript and jQuery. I am looking forward to learning more about React js in my current course.",
    picture: portfoliPic
  },
  {
    id: 2,
    title: "My React Project Idea",
    content: "I will make a countdown timer as my first React application. It will count down the days until my upcoming holiday trip this summer.",
    picture: idePic
  },
  {
    id: 3,
    title: "Design Idea",
    content: "I haven't decided on a design yet. The idea is to make a simple and stylish design with a strong accent color.",
    picture: desingPic
  }
];

const Article = ({ title, content, picture }) => (
  <div>
    <h2 className='title'>{title}</h2>
    <img className='img' src={ picture } alt={title} />
    <p>{content}</p>
  </div>
);

const ArticleSwitcher = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentArticleId, setCurrentArticleId] = useState(1);
  const currentArticle = articles.find(
    article => article.id === currentArticleId
  );

  const handleNext = () => {
    const currentIndex = articles.findIndex(
      article => article.id === currentArticleId
    );
    const nextIndex = (currentIndex + 1) % articles.length;
    setCurrentArticleId(articles[nextIndex].id);
  };

  return (
    <div className='content'>
      {showAll ? (
        <div className='articles'>
          {articles.map(article => (
            <Article
              key={article.id}
              title={article.title}
              content={article.content}
              picture={article.picture}
            />
          ))}
        </div>
      ) : (
        <Article
          title={currentArticle.title}
          content={currentArticle.content}
          picture={currentArticle.picture}
        />
      )}
      <div className='btns'>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? " Show One" : " Show All"}
        </button>
        {!showAll && (
          <div>
            <button onClick={handleNext}>Next Article</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleSwitcher;