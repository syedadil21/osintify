function keepProperty(obj, propertyToKeep) {
    for (const key in obj) {
        if (key !== propertyToKeep) {
            delete obj[key];
        }
    }
}

export default keepProperty