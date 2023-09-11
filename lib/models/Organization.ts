/* tslint:disable */
/* eslint-disable */
/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Organization
     */
    isDefault?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    externalId?: string;
}

/**
 * Check if a given object implements the Organization interface.
 */
export function instanceOfOrganization(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganizationFromJSON(json: any): Organization {
    return OrganizationFromJSONTyped(json, false);
}

export function OrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Organization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'isDefault': !exists(json, 'is_default') ? undefined : json['is_default'],
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
    };
}

export function OrganizationToJSON(value?: Organization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': value.name,
        'is_default': value.isDefault,
        'external_id': value.externalId,
    };
}

