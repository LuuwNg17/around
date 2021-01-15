/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { Flex } from 'theme-ui';


const Dot = (props: { label: string; active?: boolean; }) => {
    return <Flex sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 62,
        height: 62,
        borderRadius: 100,
        backgroundColor: WHITES,
        transition: '2ms'
    }}>
        <span>{props.label}</span>
    </Flex>;
};

const WHITES = 'rgba(255, 255, 255, 0.5)';

export default function Indicators(props: {
    total: number;
    currentIdx: number;
    onSelect?: (idx: number) => void;
}) {
    return (
        <div css={{ position: 'relative' }}>
            <div css={{
                width: '2px',
                height: '100%',
                backgroundColor: WHITES
            }}>

            </div>
            {Array.from({ length: props.total }).map((_, idx) => (
                <Dot label={`${idx}`} key={idx} />
            ))}
        </div>
    );
}
