import { useState } from 'react'
import { ProgressBar } from './components/ProgressBar';
import { Flashcard } from './components/FlashCard';
import { questions } from './components/questions';

export function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevCard = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const currentCard = questions[currentIndex];
  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: '800',
          marginBottom: '30px',
          background: 'linear-gradient(to right, #60a5fa, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center'
        }}>
          React Flashcards
        </h1>

        <ProgressBar progress={progressPercentage} />

        <Flashcard key={currentCard.questionId} card={currentCard} />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginTop: '25px',
          gap: '20px'
        }}>
          <button
            onClick={prevCard}
            disabled={currentIndex === 0}
            style={{
              flex: 1,
              padding: '15px',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              background: currentIndex === 0 ? '#334155' : '#ef4444',
              color: 'white',
              borderRadius: '12px',
              border: 'none',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
              fontSize: '1rem'
            }}
          >
            ← Anterior
          </button>

          <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#94a3b8', minWidth: '80px', textAlign: 'center' }}>
            {currentIndex + 1} / {questions.length}
          </span>

          <button
            onClick={nextCard}
            disabled={currentIndex === questions.length - 1}
            style={{
              flex: 1,
              padding: '15px',
              cursor: currentIndex === questions.length - 1 ? 'not-allowed' : 'pointer',
              background: currentIndex === questions.length - 1 ? '#334155' : '#22c55e',
              color: 'white',
              borderRadius: '12px',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            Próximo →
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;