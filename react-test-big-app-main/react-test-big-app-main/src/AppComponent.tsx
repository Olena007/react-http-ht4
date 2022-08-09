import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

interface IListItemProps {
  title: string;
  description: string;
  count: number;
}
interface IEmployee {
  name: string;
  job: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}
interface IUserData {
  data: IUser;
}
interface IUser {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  url_avatar: string;
}

interface IPost {
  email: string;
  password: string;
}

const CardItem = (props: IListItemProps) => (
          <Card.Body as="li"
                          className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">{props.title}</div>
                              {props.description}
                            </div>
                          <Badge bg="primary" pill>
                              {props.count}
                          </Badge>
          </Card.Body>
  );

  export class ListComponent{
    
  }

function AppComponent() {
  return(
    UserComponent()
    
  );
}

// export class ResourceComponent extends React.Component{
//   constructor(props : string) {
//     super(props);

//     this.state = { 
//         status: null
//     };
// }

// deletereq() {
//     fetch('https://reqres.in/api/users/2', { method: 'DELETE' })
//         .then(() => this.setState({ status: 'Delete successful' }));
// }
// }

async function get() : Promise<IUserData> {
  const response = await fetch('https://reqres.in/api/users/2');
  return await response.json();
}

async function post() : Promise<IEmployee> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'morpheus', job: 'leader' })
  };
  const response = await fetch('https://reqres.in/api/users', requestOptions);
  return await response.json();
}

async function postRS(this: any) : Promise<IPost>{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: "eve.holt@reqres.in", password: "pistol" })
  };
  const response = await fetch('https://reqres.in/api/register', requestOptions);
  return await response.json();
}

async function postRU(this: any) : Promise<IPost>{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: "eve.holt@reqres.in" })
  };
  const response = await fetch('https://reqres.in/api/register', requestOptions);
  return await response.json();
}

async function postLS(this: any) : Promise<IPost>{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: "eve.holt@reqres.in", password: "cityslicka" })
  };
  const response = await fetch('https://reqres.in/api/login', requestOptions);
  return await response.json();
}

async function postLU(this: any) : Promise<IPost>{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: "eve.holt@reqres.in"})
  };
  const response = await fetch('https://reqres.in/api/login', requestOptions);
  return await response.json();
}

async function put() : Promise<IEmployee> {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'morpheus', job: 'zion resident' })
  };
  const response = await fetch('https://reqres.in/api/users/2', requestOptions);
  return await response.json();
}

export function Deletereq() {
  const [status, setStatus] = useState('');

  useEffect(() => {
      fetch('https://reqres.in/api/users/2', { method: 'DELETE' })
          .then(() => setStatus('Delete successful'));

  }, []);

  return (
    <div className="card text-center m-3">
        <div className="card-body">
            Status: {status}
        </div>
    </div>
);
}



export function UserComponent() {

  const [createdUser, setCreatedUser] = React.useState<IUser[]>([]);

  const [emploee, setEmploee] = React.useState<IEmployee[]>([]);

  const [putreq, setPutReq] = React.useState<IEmployee[]>([]);

  const [registerS, setRegisterS] = React.useState<IPost[]>([]);

  useEffect(() => {

    async function init() {
        const resultGet = await get();
        setCreatedUser([resultGet.data]);

        const resultPost = await post();
        setEmploee([resultPost]);

        const resultPut = await put();
        setPutReq([resultPut]);
        
        const resultPostRS = await postRS();
        setRegisterS([resultPostRS]);
    }

     init();
  }, []);

  return(<>
                  {createdUser.map(item => (
                    <CardItem key={item.id} title={item.email} description={item.first_name + ' ' + item.last_name} count={item.id}  />
                  ))}
                  {emploee.map(item => (
                    <CardItem key={item.id} title={item.job} description={item.name} count={item.id}  />
                  ))}
                  {putreq.map(item => (
                    <CardItem key={item.id} title={item.job} description={item.name + ' ' + item.updatedAt} count={item.id} />
                  ))}
                  {Deletereq()}
                  {/* {registerS.map(item => (
                    <CardItem key={item.email} title={item.email} description={} count={0} />
                  ))} */}
          </>);

          
}


export default AppComponent;
