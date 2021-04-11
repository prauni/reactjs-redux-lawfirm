import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import $ from 'jquery';
/*import Button from 'react-bootstrap/Button';

import Alert from 'react-bootstrap/Alert';*/

class Myapppage extends React.Component{
	constructor(props){
		super(props)
		
		this.state = {
			categoryList:[],
			imageList:[],
			imageDetails:[]
		}
	}
	
	componentDidMount(){				
		$.ajax({
			url:'http://localhost/projects/reactjs/app03reduxcms/php/imageList.php',
			success:(res)=>{
				res = JSON.parse(res);
				this.setState({
					imageList:res
				})
			}
		});
		
		$.ajax({
			url:'http://localhost/projects/reactjs/app03reduxcms/php/categoryList.php?cat_id=0',
			success:(res)=>{
				res = JSON.parse(res);
				this.setState({
					categoryList:res
				})
			}
		});
	}	
	
	getImages = (id) =>{
		$.ajax({
			url:'http://localhost/projects/reactjs/app03reduxcms/php/imageList.php?cat_id='+id,
			success:(res)=>{
				res = JSON.parse(res);
				this.setState({
					imageList:res,
					imageDetails:[]
				})
			}
		});
	}	

	getImagesDetails = (id) =>{
		$.ajax({
			url:'http://localhost/projects/reactjs/app03reduxcms/php/imageDetails.php?img_id='+id,
			success:(res)=>{
				res = JSON.parse(res);
				this.setState({
					imageList:[],
					imageDetails:res
				})
			}
		});
	}
	
	
	render(){
		return(
			<div style={{'padding':'10px'}} >
				<div style={{'width':'10%','float':'left','paddingTop':'20px'}}>
					<ol>
						<li style={{'paddingBottom':'10px','cursor':'pointer'}} onClick={() => this.getImages(0)}>All Images</li>
						{this.state.categoryList.map(item => (
							<li key={item.id} style={{'paddingBottom':'10px','cursor':'pointer'}} onClick={() => this.getImages(item.id)}>{item.name}</li>
						))}
					</ol>
				</div>
				<div style={{'width':'88%','float':'left','border':'1px solid #5576d4','text-align':'center'}}>
					{this.state.imageList.map(item => (
						<div key={item.id} className={'im_box'} style={{'paddingBottom':'10px','padding': '25px','display':'inline-block','text-align':' center !important;'}} >
							<img src={item.name} onClick={() => this.getImagesDetails(item.id)} style={{'width':'100%','padding':'2px', 'margin':'0 auto', 'border':'1px solid #5576d4','border-radius':'10px','cursor':'pointer'}} />
						</div>
					))}
				
					{this.state.imageDetails.map(item => (
						<div key={item.id} className={'imd_box'} style={{'paddingBottom':'10px','padding': '25px','display':'inline-block','text-align':' center !important;'}} >
							
							<img src={item.name} onClick={() => this.getImagesDetails(item.id)} style={{'float':'left','width':'40%','padding':'2px', 'margin':'0 auto', 'border':'1px solid #5576d4','border-radius':'10px','cursor':'pointer'}} />
							<div style={{'float':'left','width':'60%','padding':'2px 2px 2px 20px', 'text-align':'left', 'margin':'0 auto'}}>
								{item.description}
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}
ReactDOM.render(<Myapppage />,document.getElementById('root'))




