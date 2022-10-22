import Header from './Header';


const Wrapper = (props) => {
	return (
		<>
			<Header />
        
            <div className="container-fluid">
                <div className="main-content">
                    {props.children}
                </div>
            </div>	
		</>
	)
}

export default Wrapper;