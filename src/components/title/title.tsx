import React from 'react';


export interface ITitleProps {
    title: string;
}

const Title: React.FC<ITitleProps> = (props) => {
    throw new Error('Ошибка рендера');
    return (
        <h1>
            { props.title }
        </h1>
    );
};

export default Title;