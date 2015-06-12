
module.exports = {
  /**
   * API base url
   * @type {string}
   */
   API_BASE :"https://api.github.com/",

  /**
   * A no operation function for passing around
   */
  noop : function() {},

  /**
   * Sort by stars
   * @type {string}
   */
  SORT_STARS :'stars',
  /**
   * Sort by updated
   * @type {string}
   */
  SORT_UPDATED :'updated',
  /**
   * Sort by forks
   * @type {string}
   */
  SORT_FORKS :'forks'
};