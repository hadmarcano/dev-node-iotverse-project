const { Model, DataTypes, Sequelize } = require("sequelize");

const AGENT_TABLE = "agents";

const AgentSchema = {
  uiid: {
    allowNull: false,
    // autoIncrement: true,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  hostname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  pid: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  connected: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    // unique: true,
  },
  // createdAt: {
  //   allowNull: false,
  //   type: DataTypes.DATE,
  //   field: "created_at",
  //   defaultValue: Sequelize.NOW,
  // },
};

class Agent extends Model {
  static associate(models) {
    // associate
    // this.hasOne(models.Customer, {
    //   as: "customer",
    //   foreignKey: "userId",
    // });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AGENT_TABLE,
      modelName: "Agent",
      timestamps: false,
    };
  }
}

module.exports = {
  AGENT_TABLE,
  AgentSchema,
  Agent,
};
