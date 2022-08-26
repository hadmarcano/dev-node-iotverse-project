const { Model, DataTypes, Sequelize } = require("sequelize");

const METRIC_TABLE = "metrics";

const MetricSchema = {
  type: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  value: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
};

class Metric extends Model {
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
      tableName: METRIC_TABLE,
      modelName: "Metrics",
      timestamps: false,
    };
  }
}

module.exports = {
  METRIC_TABLE,
  MetricSchema,
  Metric,
};
