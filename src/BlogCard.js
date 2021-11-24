import React from "react";
import BlogStyles from './Blogcard.module.css'

class BlogCard extends React.Component{
    state = {
        likeCount: 0
    }
    incrementLikeCount = () => {
        this.setState((prevState) => {
            return {
                likeCount: ++prevState.likeCount
            }
        })
}
    render() {
        return(
            <div className={BlogStyles.BlogCard} key={this.props.item.id}>
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.description}</p>
                <p>Like Button Count: {this.state.likeCount}</p>
                <button onClick={this.incrementLikeCount}>Like</button>
            </div>
        )
    }


}

export default BlogCard;