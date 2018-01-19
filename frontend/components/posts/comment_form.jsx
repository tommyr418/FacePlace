 import React from 'react';

 class CommentForm extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       body: "",
       author_id: this.props.currentUser.id,
       post_id: this.props.postId,
     };
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleInputChange(e){
     this.setState({
       body: e.currentTarget.value
     });
   }

   handleSubmit(e) {
     e.preventDefault();
     const comment = Object.assign({}, this.state);
     this.props.postComment(comment);
   }

   render() {
     return (
       <div className="post-comment-form">
         <img id="comment-pic"
           src={ this.props.currentUser.image_url }/>
         <form onSubmit={ this.handleSubmit }>
           <div>
             <input onChange={ this.handleInputChange }
               id={ `comment-input-${this.props.postId}` }></input>
             <button>
               Submit
             </button>
           </div>
         </form>
       </div>
     )
   }
 }

 export default CommentForm;
