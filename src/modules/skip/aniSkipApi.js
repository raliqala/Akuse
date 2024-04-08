'use strict'

const Store = require('electron-store')
const Requests = require('../requests.js')

/**
 * Ani skip API for anime skip intro and outro and contribution
 * @class
 */
module.exports = class AniSkipAPI extends Requests {

      /**
     * @constructor
     */
      constructor() {
        super();
        this.store = new Store()
        this.APIUrl = 'https://api.aniskip.com/v2'
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }


        /**
     * Retrieves the access token for the api
     * 
     * @param {*} code 
     * @returns access token
     */
        async getAnimeSkipTime(animeId, episodeNumber, epLength = 0) {
          const url = `${this.APIUrl}/skip-times/${animeId}/${episodeNumber}?types=op&types=ed&episodeLength=${epLength}`;
          const response = await this.makeRequest('GET', url, this.headers)
  
          if (response.statusCode !== 200) {
            return [];
          }
          

          return response.results;
      }

}