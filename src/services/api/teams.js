import { https } from './https'

export default {

    allTeams:() => {
        return https.get('teams')
        .then(result => { console.log(result); return result; })
        .catch(error => { console.error(error); return Promise.reject(error); });
    },
    getTeamForGroup(team, group) {
        if (team.group_letter == group) {
            return team.name
        }else {
            return null
        }
    }
}