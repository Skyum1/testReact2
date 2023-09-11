import React, { Component } from 'react';

class TOC extends Component {
    render() {
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length) {
        // 다중으로 dom요소 추가시 key값을 넣어줘야 warning 제거
        lists.push(
          <li key={data[i].id}>
            <a 
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
            >{data[i].title}
            </a>
          </li>);
        i++;

      }

      return (
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }

  export default TOC;