'use client'

import React from 'react'

import Button  from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Buttons = () => {
  return (
    <>
    <section className=''>
        <header className='text-3xl my-10'>Buttons</header>
        <div className='flex w-[332px] h-[60px] my-6 gap-10 '>
            <div>
                <p>&lt;Button /&gt;</p>
                <Button variant='text'>Default</Button>
            </div>
            <div>
                <p>&:hover, &:focus</p>
                <Button variant='text' color='primary'>Default</Button>
            </div>
        </div>
        <div className='flex my-6 gap-10 '>
            <div>
                <p>&lt;Button variant= ”outline” /&gt;</p>
                <Button variant='outlined'>Default</Button>
            </div>
            <div>
                <p>&:hover, &:focus</p>
                <Button variant='outlined'>Default</Button>
            </div>
        </div>
        <div className='flex my-6 gap-10 '>
            <div>
                <p>&lt;Button variant= &rdquo;text&rdquo; /&gt;</p>
                <Button variant='text'>Default</Button>
            </div>
            <div>
            <p>&:hover, &:focus</p>
            <Button variant='text'>Default</Button>
            </div>
        </div>
        <div className='flex my-6'>
            <div>
                <p>&lt;Button disableShadow /&gt;</p>
            <Button disableShadow>Default</Button>
            </div>
        </div>
        <div className='flex my-6 gap-10'>
            <div>
                <p>&lt;Button disabled /&gt;</p>
                <Button disabled>Default</Button>
            </div>
            <div>
                <p>&lt;Button variant=”text” disabled /&gt;</p>
                <Button variant="text" disabled>Default</Button>
            </div>
        </div>
        <div className='flex my-6 gap-10'>
            <div>
                <p>&lt;Button startIcon=”local_grocery_store” /&gt;</p>
                <Button startIcon={<AddShoppingCartIcon/>} variant='contained'>Default</Button>
            </div>
            <div>
                <p>&lt;Button endIcon=”local_grocery_store” /&gt;</p>
                <Button endIcon={<AddShoppingCartIcon />} variant='contained'>Default</Button>
            </div>
        </div>
        <div className='flex my-6 gap-10'>
            <div>
                <p>&lt;Button size=”sm” /&gt;</p>
                <Button size={"small"} >Default</Button>
            </div>
            <div>
                <p>&lt;Button size=”md” /&gt;</p>
                <Button  size={'medium'}>Default</Button>
            </div>
            <div>
                <p>&lt;Button size=”lg” /&gt;</p>
                <Button   size={'large'} >Default</Button>
            </div>
        </div>
        <div className='flex my-6 gap-10'>
            <div>
                <p>&lt;Button color=”default” /&gt;</p>
                <Button variant="text" >Default</Button>
            </div>
            <div>
                <p>&lt;Button color=”primary” /&gt;</p>
                <Button variant='contained' color='primary'>Defaults</Button>
            </div>
            <div>
                <p>&lt;Button color=”secondary” /&gt;</p>
                <Button color='secondary' variant='contained'>Default</Button>
            </div>
            <div>
                <p>&lt;Button color=”danger” /&gt;</p>
                <Button color='error' variant='contained'>Default</Button>
            </div>

        </div>
            <div className='flex items-center mx-auto my-6 gap-10'>
                <div>
                    <p>&:hover, &:focus</p>
                    <Button variant='contained' disabled>Default</Button>
                </div>
                <span className='flex items-center mt-6 gap-10'>
                <div>
                    <Button variant='contained'>Default</Button>
                </div>
                <div>
                    <Button variant='contained' color='secondary'>Default</Button>
                </div>
                <div>
                    <Button variant='contained' color='error'>Default</Button>
                </div>
                </span>
            </div>
    </section>
    </>
  )
}

export default Buttons
