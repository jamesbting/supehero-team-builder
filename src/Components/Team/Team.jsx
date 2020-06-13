import React from "react";
import TeamMember from "./TeamMember/TeamMember";
export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: [],
      averageStats: [0, 0, 0, 0, 0, 0, 0], // current average stats are in the following order: Intelligence, Strength, Speed, Durability, Power, Combat
    };
    this.stats = [
      "Intelligence",
      "Strength",
      "Speed",
      "Durability",
      "Power",
      "Combat",
    ];
  }

  render() {
    const stats = this.renderStats();
    if (this.state.teamMembers.length === 0) {
      return (
        <div>
          <h1>Team:</h1>
          {stats}
          <p>
            You haven't added anyone to your team yet. Search for a superhero to
            add them to your team.
          </p>
        </div>
      );
    }
    return (
      <div>
        <h1>Team:</h1>
        {stats}
        <TeamMember></TeamMember>
      </div>
    );
  }

  //converts the average stats to a string with the name of each stat
  averageStatsToString() {
    let string = "";
    for (let i = 0; i < this.stats.length; i++) {
      string += `${this.stats[i]}: ${this.state.averageStats[i].toString()} `;
    }
    return string;
  }
  renderStats() {
    return (
      <div className="averageStatContainer">
        {" "}
        Average Stats: {`${this.averageStatsToString()}`}
      </div>
    );
  }
}