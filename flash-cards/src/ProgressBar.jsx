export const ProgressBar = ({ progress }) => {
    return (
        <div style={{
            width: '100%',
            marginBottom: '15px',
            padding: '0 5px',
            boxSizing: 'border-box'
        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '10px',
                color: '#94a3b8',
                fontWeight: 'bold',
                letterSpacing: '0.5px'
            }}>
                <span style={{ fontSize: 'clamp(0.65rem, 3vw, 0.85rem)' }}>
                    STATUS DO APRENDIZADO
                </span>
                <span style={{
                    fontSize: 'clamp(0.8rem, 4vw, 1rem)',
                    color: '#3b82f6',
                    fontFamily: 'monospace'
                }}>
                    {Math.round(progress)}%
                </span>
            </div>


            <div style={{
                width: "100%",
                backgroundColor: "#1e293b",
                borderRadius: "20px",
                height: '14px',
                padding: '3px',
                boxSizing: 'border-box',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center'
            }}>

                <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    borderRadius: '20px',
                    transition: 'width 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
                    boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>

                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transform: 'skewX(-20deg)'
                    }} />
                </div>
            </div>
        </div>
    );
};