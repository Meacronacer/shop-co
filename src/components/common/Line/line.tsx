
interface props {
    top?: string
    bottom?: string
}

const Line: React.FC<props> = ({top = '0px', bottom = '0px'}) => {
    return (
        <div style={{
            border: '1px solid rgba(0, 0, 0, 0.1)',
            maxWidth: '1240px',
            margin: `${top} auto ${bottom} auto`,
            width: '100%',
            height: '0px;',
        }}>

        </div>
    );
}
 
export default Line;