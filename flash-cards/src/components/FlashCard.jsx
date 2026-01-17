import { useState } from "react";

export const Flashcard = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => setIsFlipped(!isFlipped);

    const faceStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '24px',
        padding: 'clamp(20px, 5vw, 40px)',
        boxSizing: 'border-box',
        color: 'white',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center'
    };

    return (
        <div style={{ perspective: '1000px', width: '100%', margin: '20px 0', cursor: 'pointer' }} onClick={handleFlip}>
            <div style={{
                position: 'relative',
                width: '100%',
                minHeight: 'clamp(300px, 50vh, 400px)',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}>

                <div style={{ ...faceStyle, background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
                    <span style={{ color: '#60a5fa', fontWeight: '800', marginBottom: '15px', fontSize: '0.7rem', letterSpacing: '2px' }}>PERGUNTA</span>
                    <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', lineHeight: '1.5', margin: 0 }}>{card.questionText}</p>
                    <small style={{ marginTop: '20px', color: '#64748b' }}>(Clique para virar)</small>
                </div>


                <div style={{ ...faceStyle, background: 'linear-gradient(135deg, #064e3b 0%, #059669 100%)', transform: 'rotateY(180deg)' }}>
                    <span style={{ color: '#34d399', fontWeight: '800', marginBottom: '15px', fontSize: '0.7rem', letterSpacing: '2px' }}>RESPOSTA TÉCNICA</span>
                    <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', lineHeight: '1.6', margin: 0 }}>{card.correctAnswer}</p>
                </div>
            </div>
        </div>
    );
};