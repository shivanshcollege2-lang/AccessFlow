module.exports = (sequelize, DataTypes) => {
    const AuditLog = sequelize.define('AuditLog', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        actionType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        details: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    }, {
        tableName: 'audit_logs',
        timestamps: false,
    });

    AuditLog.associate = (models) => {
        AuditLog.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
    };

    return AuditLog;
};