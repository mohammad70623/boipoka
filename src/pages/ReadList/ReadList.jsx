import React, { useEffect, useState } from 'react';
import { useActionData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList,setReadList] = useState([])
    const data= useActionData();
    console.log(data)

    useEffect(()=>{
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id=> parseInt(id))
        const myReadList = data.filter(book=>ConvertedStoredBooks.include(book.bookId));
        setReadList(myReadList)
    }, [])
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read {readList.length}</h2>
      {
        readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;