<template>
  <div class="groups">
    <h2>Groups</h2>
    <div class="container">
      <div class="col-12" v-for="(group, index) in groups" v-bind:key="index">
        <h4> Group {{ group }} </h4>
        <table class="table table-responsive table-striped">
          <thead class="table-dark">
            <tr>
              <th class="center" scope="col">Country</th>
              <th class="center" scope="col">MP</th>
              <th class="center" scope="col">W</th>
              <th class="center" scope="col">D</th>
              <th class="center" scope="col">L</th>
              <th class="center" scope="col">GS</th>
              <th class="center" scope="col">GL</th>
              <th class="center" scope="col">GD</th>
              <th class="center" scope="col">PTS</th>
            </tr>
          </thead>
          <tbody v-for="(team, index) in teams" v-bind:key="index">
            <tr v-if="getTeamForGroup(team, group) != null">
              <td class="name"><img>{{ getFlag(team.country) }} <span>{{ (team.name) ? team.name : null}}</span></td>
              <td class="center">{{ team.games_played ? team.games_played : 0 }}</td>
              <td class="center">{{ team.wins ? team.wins : 0 }}</td>
              <td class="center">{{ team.draws ? team.draws : 0 }}</td>
              <td class="center">{{ team.losses ? team.losses : 0 }}</td>
              <td class="center">{{ team.goals_for ? team.goals_for : 0 }}</td>
              <td class="center">{{ team.goals_against ? team.goals_against : 0 }}</td>
              <td class="center">{{ team.goal_differential ? team.goal_differential : 0 }}</td>
              <td class="center">{{ team.group_points ? team.group_points : 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import teams from '@/services/api/teams'
import flags from '@/services/utils/flags'

export default {
  data() {
    return {
      groups:[],
      teams:[]
    }
  },
  methods: {
    async getTeams() {
      const response = await teams.allTeams()
      for (let i = 0; i < 8; i++) {
        this.groups.push(response.data.groups[i].letter)
        for (let x = 0; x < 4; x++) {
          this.teams.push(response.data.groups[i].teams[x])
        }
      }
    },
    getTeamForGroup(team, group) {
      return teams.getTeamForGroup(team, group)
    },
    getFlag(country) {
      return flags[country]
    }
  },

  created() {
    this.getTeams()
  },
}
</script>

<style>
h4 {
  padding-top: 1em;
  text-align: left;
}

.name {
  text-align: left;
}
</style>