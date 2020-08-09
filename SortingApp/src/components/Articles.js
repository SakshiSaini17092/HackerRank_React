import React from 'react';


class Articles extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { slide:  this.props.slides[0] ,
    //                 index : 0, 
    //                  restart : true ,
    //                     prev : true,
    //                     next : false
    //             };
  }

  render() {
       return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                <tr data-testid="article" key="article-index">
                    <td data-testid="article-title">Article 1 title</td>
                    <td data-testid="article-upvotes">Article 1 title</td>
                    <td data-testid="article-date">Article 1 title</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
  }
}

export default Articles;

