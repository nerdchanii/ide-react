import react from 'react';

const Problem = ()=>{

    const style={
        display:'grid', 
        gridTemplateRows:'1fr 1fr',
        border: '2px solid green'
        
    }    

    return (

    <div style={style}>   
        <div>문제</div>
        {/*<Question /> */}
        {/* <testCase />  */}
        <div>테스트케이스</div>
    </div>
    );
}


export default Problem