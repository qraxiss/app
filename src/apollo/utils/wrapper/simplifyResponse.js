export default function simplifyResponse(response) {
    const entries = Object.entries(response).filter(([k]) => k !== '__typename')

    if (entries.length === 1) {
        return simplify(entries[0][1])
    } else if (entries.length > 1) {
        const simplifiedResponse = {}

        for (const [key, value] of entries) {
            simplifiedResponse[key] = simplify(value)
        }

        return simplifiedResponse
    } else {
        throw new Error('Cannot simplify an empty Strapi response')
    }
}

function simplify(value) {
    if (Array.isArray(value)) return value.map(simplify)

    if (isPlainObject(value)) {
        if ('id' in value && 'attributes' in value) {
            return simplify({ id: value.id, ...value.attributes })
        }
        if ('data' in value) return simplify(value.data)
        if ('attributes' in value) return simplify(value.attributes)
        return objectMap(value, simplify)
    }

    return value
}

function isPlainObject(obj) {
    return typeof obj === 'object' && obj !== null && obj.constructor === Object && Object.getPrototypeOf(obj) === Object.prototype
}

function objectMap(obj, valSelector, keySelector, ctx) {
    const ret = {}
    for (const key of Object.keys(obj)) {
        if (key === '__typename') continue
        const retKey = keySelector ? keySelector.call(ctx || null, key, obj) : key
        const retVal = valSelector.call(ctx || null, obj[key], obj)
        ret[retKey] = retVal
    }
    return ret
}
