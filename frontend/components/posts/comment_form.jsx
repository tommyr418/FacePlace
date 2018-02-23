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
     this.handleFocus = this.handleFocus.bind(this);
     this.handleBlur = this.handleBlur.bind(this);
   }

   handleInputChange(e){
     this.setState({
       body: e.currentTarget.value
     });
   }

   handleFocus(e) {
     if (e.currentTarget.value === e.currentTarget.defaultValue) {
       e.currentTarget.value = "";
       e.currentTarget.style.color = "#333";
     }
   }

   handleBlur(e) {
     if (e.currentTarget.value === "") {
       e.currentTarget.style.color = "#a6a6a6";
       e.currentTarget.value = e.currentTarget.defaultValue;
     }
   }

   handleSubmit(e) {
     e.preventDefault();
     const comment = Object.assign({}, this.state);
     e.currentTarget.children[0].children[0].value
       = e.currentTarget.children[0].children[0].defaultValue;
     e.currentTarget.children[0].children[0].style.color = "#a6a6a6";
     e.currentTarget.children[0].children[0].blur();
     this.props.postComment(comment).then(
       () => {
         this.setState({
           body: "",
         });
       }
     );
   }

   render() {
     return (
       <div className="post-comment-form">
         <img id="comment-pic"
           src={ this.props.currentUser.image_url }/>
         <form onSubmit={ this.handleSubmit }>
           <div>
             <input onChange={ this.handleInputChange }
               id={ `comment-input-${this.props.postId}` }
               defaultValue="Write a comment..."
               onFocus={ this.handleFocus }
               onBlur={ this.handleBlur }></input>
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
