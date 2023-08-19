import React from 'react';
import { Typography, CardHeader, CardContent, CardActions, Button } from '@mui/material';
import Card from '@mui/material/Card'

const Home = () => {
    const books = [
        { title: 'Book 1', description: 'this is sexy', price: `$10`, link: `https://example.com/book1`, image: 'kinky pic'},
        { title: 'Book 2', description: 'this is sexier', price: `$20`, link: `https://example.com/book2`, image: 'kinky pic'},
        { title: 'Book 3', description: 'this is 51 shades of sexy', price: `$100`, link: `https://example.com/book3`, image: 'kinky pic'}
    ]
    return (
        <>
      <Typography variant="h4" sx={{ margin: '1rem',display: 'flex', justifyContent: 'center' }}>Welcome</Typography>
            {books.map((book, index) => {
                return (
                    <div key={index}>
                            <Card raised={true} >
                                <CardContent>
                                    <Typography
                                        variant="h6" >{book.title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1">Description: {book.description}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1">Price: {book.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                    href={book.link} target="_blank" rel="noopener noreferrer"
                                    variant='contained'
                                    color={'primary'}>
                                        Purchase Book
                                    </Button>
                                </CardActions>
                            </Card>
                    </div>
                )
            })}
    </>
    )
}
export default Home;