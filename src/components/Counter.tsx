import React from 'react';
import { Button } from '@chakra-ui/react';
import { useToast } from "@chakra-ui/react";
import { useCounter } from '../CounterContext';
import { LuCircleCheck } from "react-icons/lu";


const Counter: React.FC = () => {
    const { count, increment } = useCounter();
    const toast = useToast();

    const handleIncrement = () => {
        increment();
        toast({
            position: 'top-right',
            duration: 3000,
            isClosable: true,
            render: () => (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '12px 20px 12px 16px',
                        gap: '8px',
                        background: 'radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F',
                        boxShadow: '0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)',
                        borderRadius: '8px',
                        border: '1px solid',
                        borderImageSource: 'linear-gradient(0deg, #6F7076, #6F7076), radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%)',
                    }}
                >
                    <LuCircleCheck style={{ width: '24px', height: '24px', color: '#74C898' }} />
                    <div>
                        <span style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '14px', lineHeight: '16px', color: '#FFFFFF' }}>
                            Incremented
                        </span>
                        <br />
                        <span style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', lineHeight: '16px', color: '#FFFFFF' }}>
                            Counter is now {count}
                        </span>
                    </div>
                </div>
            ),
        });
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <p>Current count {count}</p>
            <Button onClick={handleIncrement} colorScheme="gray" size="md" className='ml-10'>
                +1
            </Button>
        </div>
    );
};

export default Counter;
