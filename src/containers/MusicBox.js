import React from 'react';
import Header from '../components/Header';
import SongList from '../components/SongList';

// import SongItem from '../components/SongItem';


class MusicBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tunesData:[]
    };
  }

  componentDidMount(){
    const url='https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    console.log('DidMount');
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener("load", () => {
      if(request.status!== 200) return;
      const jsonString =  request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({tunesData: data.feed.entry})
    });

    request.send();
  }

  render(){
    return (
      <div>
        <Header title='Top 20 iTunes' />
        <SongList tunes ={this.state.tunesData} />
      </div>
    );
  }
}

export default MusicBox;
