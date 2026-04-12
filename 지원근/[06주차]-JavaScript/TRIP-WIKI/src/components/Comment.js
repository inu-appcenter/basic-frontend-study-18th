export default function Comment({ $app, initialState, onAddComment }) {
  this.state = initialState;
  this.$target = document.createElement('div');
  this.$target.className = 'comment';

  $app.appendChild(this.$target);

  this.template = () => {
    let temp = `<div class="comment-title">💬 Comment</div>
    <div class="comment-block">
      <input type="text" id="user-name" placeholder="User">
      <textarea id="comment-box" placeholder="What do you think about this city?"></textarea>
      <button id="submit-comment">Submit</button>
    </div>
    <div class="comment-list">`;

    if (this.state && this.state.length > 0) {
      this.state.forEach((comment) => {
        temp += `
          <div class="comment-item">
            <div class="comment-header">
              <span class="comment-username">${comment.username}</span>
              <span class="comment-date">${comment.date}</span>
            </div>
            <div class="comment-box">${comment.box}</div>
          </div>
        `;
      });
    } else {
      temp += `<div style="text-align:center; color: var(--gray); padding: 20px;">It's quiet here. Be the first to share your thoughts!</div>`;
    }

    temp += `</div>`;
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    const $submitButton = this.$target.querySelector('#submit-comment');
    $submitButton.addEventListener('click', () => {
      const $userNameInput = this.$target.querySelector('#user-name');
      const $commentInput = this.$target.querySelector('#comment-box');

      let username = $userNameInput.value;
      const box = $commentInput.value;

      if (!box) {
        alert('Please enter your comment!');
        return;
      }

      if (!username) {
        username = 'Anonymous';
      }

      const today = new Date();
      const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      const newComment = {
        username: username,
        box: box,
        date: dateString,
      };

      if (onAddComment) {
        onAddComment(newComment);
      }
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
