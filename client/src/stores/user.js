export default {
  state: [
    {id: 1, name: 'name#1'},
    {id: 2, name: 'name#2'}
  ],

  getState() {
    return this.state;
  },

  editUser(user) {
    this.state = this.state.map(
      item => item.id === user.id ? { ...item, ...user } : item
    )
  }
}