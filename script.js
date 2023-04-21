const App = () => {
    let [headerClass, setClassHeader] = React.useState('header')
    let [headerHClass, setClassHeaderH] = React.useState('headerH')
    let [headerText, setHeaderText] = React.useState('text1')
    let [blockClass, setClassBlock] = React.useState('block')
    let [blockText, setBlockText] = React.useState('text3')
    let [ulClass, setClassUl] = React.useState('ul')
    const headerClick = () =>{
        setClassHeader('header-clicked')
        setClassHeaderH('headerH-clicked')
        setHeaderText('text2')
    }
    const blockClick = () =>{
        setClassBlock('block-clicked')
        setBlockText('text4')
    }
    const ulClick = () =>{
        setClassUl('ul-clicked')
    }
    return (
        <div className="app">
            <div className={headerClass} onClick={headerClick}><h1 className={headerHClass}>{headerText}</h1></div> 
            <div className='container2'>
                <ul className={ulClass} onClick={ulClick}>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                </ul>
                <div className={blockClass} onClick={blockClick}>{blockText}</div>
            </div>
        </div>
    )
}
const container = document.querySelector('.container')
const root = ReactDOM.createRoot(container)
root.render(<App />)