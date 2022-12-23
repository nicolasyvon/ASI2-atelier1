class EnvelopeDto {
    static getType() { return "com.cpe.common.messaging.dto.EnvelopeDto" }

    constructor({object, objectType, operation}) {
        if (!objectType && !object.constructor.getType) {
            throw new Error(`ERROR : objet ${object} is not compatible (objectType missing)`);
        }

        this.object = object;
        this.objectType = objectType || object.constructor.getType();
        this.operation = operation;
    }
}

module.exports = EnvelopeDto;