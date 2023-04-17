import { Button } from 'reactstrap';
import './App.css';
import { counterState } from './hookState';
import { useHookstate } from '@hookstate/core';
import { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';



function App() {
  const [expence, setExpence] = useState('');
  const [expenceValue, setExpenceValue] = useState(0);

  const [income, setIncome] = useState('');
  const [money, setMoney] = useState(0);



  const counter = useHookstate(counterState);


  const handleExpence = () => {
    if (expence !== null && expenceValue >= 1) {
      counter.expense.set((expenceArray)=>parseInt(expenceArray)+parseInt(expenceValue))
      
      counter.expense_description.set((old) => { 
        const oldArr = [...old]
        oldArr.push({
          expence,
          expenceValue
        })
        setExpence('');
        setExpenceValue('')

        return oldArr
      })

    }

  }
  const handleIncome = () => {

    if (income !== null && money >= 1) {
      counter.income.set((expenceArray)=>parseInt(expenceArray)+parseInt(money))
      counter.income_decription.set((incomes) => {
        const oldArray = [...incomes]
        oldArray.push({
          income,
          money
        })
        setIncome('')
        setMoney('')
        return oldArray
      })
    }

  }

  return (
    <div className="App">
      <div className='container mt-3'>
        <h1>Total Money <span className={`${(counter.get().income - counter.get().expense) >= 0 ? 'bg-success' : 'bg-danger'} rounded p-2`}>{counter.get().income - counter.get().expense}</span> </h1>
        <div className='row'>
          <div className='col'>
            <h3>Add Expence <span className='bg-danger p-2 rounded text-light'> {counter.get().expense}</span> </h3>
            <input type='text' value={expence} onChange={(e) => setExpence(e.target.value)} className='m-2' placeholder='discription' />
            <input type='number' value={expenceValue} onChange={(e) => parseInt(setExpenceValue(e.target.value))} className='m-2' placeholder='value' /> <br />
            <Button onClick={handleExpence} className='mb-3'>Add Expense</Button>
            {

              counter.get().expense_description.map((item,index) => (
                <ListGroup key={index}>
                  <ListGroupItem className='d-flex justify-content-around bg-danger text-light m-2'>
                    <span>{item.expence}
                    </span>
                    <span>{item.expenceValue}
                    </span>

                  </ListGroupItem>

                </ListGroup>
              ))


            }

          </div>
          <div className='col'>
            <h3>Add Money <span className='bg-success text-light rounded p-2'>{counter.get().income}</span></h3>
            <input type='text' value={income} onChange={(e) => setIncome(e.target.value)} className='m-2' placeholder='discription' />
            <input type='number' value={money} onChange={(e) => parseInt(setMoney(e.target.value))} className='m-2' placeholder='value' /> <br />
            <Button onClick={handleIncome} className='mb-3'>Add Money</Button>
            {

              counter.get().income_decription.map((item,index) => (
                <ListGroup key={index}>
                  <ListGroupItem className='d-flex justify-content-around bg-success text-light m-2'>
                    <span>{item.income}
                    </span>
                    <span>{item.money}
                    </span>

                  </ListGroupItem>

                </ListGroup>
              ))


            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
