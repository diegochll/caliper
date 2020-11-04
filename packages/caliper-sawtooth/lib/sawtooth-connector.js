/*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


'use strict';


class SawtoothConnector extends ConnectorBase {
    getType() {}
    getWorkerIndex() {}
    async init(workerInit) {}
    async installSmartContract() {}
    async prepareWorkerArguments(number) {}
    async getContext(roundIndex, args) {}
    async releaseContext() {}
    async sendRequests(requests) {}
}
/*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

const {ConnectorBase, CaliperUtils, ConfigUtil, TxStatus} = require('@hyperledger/caliper-core');

//const logger = CaliperUtils.getLogger('sawtooth-connector');

/**
 * @typedef {Object} SawtoothConnector
 *
 * @property {string} contract Required. The name of the smart contract
 * @property {string} verb Required. The name of the smart contract function
 * @property {string} args Required. Arguments of the smart contract function in the order in which they are defined
 * @property {boolean} readOnly Optional. If method to call is a view.
 */
/**
 * Extends {BlockchainConnector} for a sawtooth network backend
 */
class SawtoothConnector extends ConnectorBase {
    /**
     * Create a new instance of the {Ethereum} class.
     * @param {number} workerIndex The zero-based index of the worker who wants to create an adapter instance. -1 for the manager process.
     * @param {string} bcType The target SUT type
     */
    constructor(workerIndex, bcType) {
        super(workerIndex, bcType);
        let configPath = CaliperUtils.resolvePath(ConfigUtil.get(ConfigUtil.keys.NetworkConfig));

        this.sawtoothConfig = require(configPath).sawtooth;

        this.context = undefined;
        this.workerIndex = workerIndex;
    }

    /**
     * Check config file for errors
     * @param {object} sawtooth config
     */
    checkConfig(sawtoothConfig) {
        //todo: implement
    }

    /**
     * Init the {Sawtooth} object
     * @param {boolean} workerInit Indicates whether the initialization happens in the worker process
     * @return {object} ???!??? Promise<boolean> True if the account was successfully unlocked else false
     */
    init(workerInit) {
        //todo: implement
    }

    /**
     * Deploy smart contracts as specified in network config file
     * @returns {Promise} Promise execution for all contract creations
     */
    async installSmartContract() {
        let promises = [];
        let self = this;
        logger.info('Creating contracts...');

    }
}
