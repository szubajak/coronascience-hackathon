export type Observation = {
    resourceType: string
    id: string
    meta: Meta
    type: string
    total: number
    link: Link[]
    entry: Entry[]
}

export type Meta = {
    lastUpdated: string
}

export type Link = {
    relation: string
    url: string
}

export type Entry = {
    fullUrl: string
    resource: Resource
}

export type Resource = {
    resourceType: string
    id: string
    meta: ResourceMeta
    status: string
    category: ResourceCategory[]
    code: Code
    subject: Subject
    effectiveDateTime: string
    valueCodeableConcept: ValueCodeableConcept
}

export type ResourceMeta = {
    extension: ResourceExtension[]
    versionId: string
    lastUpdated: string
}

export type ResourceExtension = {
    url: string
    extension: Extension[]
}

export type Extension = {
    url: string
    valueCoding: ValueCoding
    valueReference: ValueReference
}

export type ValueCoding = {
    system: string
    code: string
    display: string
}

export type ValueReference = {
    reference: string
    display: string
}

export type ResourceCategory = {
    coding: Coding[]
}

export type Coding = {
    system: string
    code: string
    display: string
}

export type Code = {
    coding: Coding[]
}

export type Subject = {
    reference: string
    display: string
}

export type ValueCodeableConcept = {
    coding: Coding[]
}
