class KubernetesClient extends APIClient {
  constructor(options) {
    super(options);
  }
  async getSwaggerJSON() {
    const path = "/openapi/v2";
    return this.get(path);
  }
  async getServiceAccountIssuerOpenIDConfiguration() {
    const path = "/.well-known/openid-configuration/";
    return this.get(path);
  }
  async getCoreAPIVersions() {
    const path = "/api/";
    return this.get(path);
  }
  async getCoreV1APIResources() {
    const path = "/api/v1/";
    return this.get(path);
  }
  async listCoreV1ComponentStatus() {
    const path = "/api/v1/componentstatuses";
    return this.get(path);
  }
  async readCoreV1ComponentStatus() {
    const path = "/api/v1/componentstatuses/{name}";
    return this.get(path);
  }
  async listCoreV1ConfigMapForAllNamespaces() {
    const path = "/api/v1/configmaps";
    return this.get(path);
  }
  async listCoreV1EndpointsForAllNamespaces() {
    const path = "/api/v1/endpoints";
    return this.get(path);
  }
  async listCoreV1EventForAllNamespaces() {
    const path = "/api/v1/events";
    return this.get(path);
  }
  async listCoreV1LimitRangeForAllNamespaces() {
    const path = "/api/v1/limitranges";
    return this.get(path);
  }
  async listCoreV1Namespace(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces";
    return this.get(path);
  }
  async createCoreV1Namespace(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces";
    return this.post(path);
  }
  async createCoreV1NamespacedBinding(body) {
    const path = "/api/v1/namespaces/{namespace}/bindings";
    return this.post(path);
  }
  async listCoreV1NamespacedConfigMap(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/configmaps";
    return this.get(path);
  }
  async createCoreV1NamespacedConfigMap(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/configmaps";
    return this.post(path);
  }
  async deleteCoreV1CollectionNamespacedConfigMap(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/configmaps";
    return this.delete(path);
  }
  async readCoreV1NamespacedConfigMap() {
    const path = "/api/v1/namespaces/{namespace}/configmaps/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedConfigMap(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/configmaps/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedConfigMap(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/configmaps/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedConfigMap(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/configmaps/{name}";
    return this.patch(path);
  }
  async listCoreV1NamespacedEndpoints(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/endpoints";
    return this.get(path);
  }
  async createCoreV1NamespacedEndpoints(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/endpoints";
    return this.post(path);
  }
  async deleteCoreV1CollectionNamespacedEndpoints(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/endpoints";
    return this.delete(path);
  }
  async readCoreV1NamespacedEndpoints() {
    const path = "/api/v1/namespaces/{namespace}/endpoints/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedEndpoints(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/endpoints/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedEndpoints(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/endpoints/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedEndpoints(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/endpoints/{name}";
    return this.patch(path);
  }
  async listCoreV1NamespacedEvent(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/events";
    return this.get(path);
  }
  async createCoreV1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/events";
    return this.post(path);
  }
  async deleteCoreV1CollectionNamespacedEvent(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/events";
    return this.delete(path);
  }
  async readCoreV1NamespacedEvent() {
    const path = "/api/v1/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/events/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedEvent(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/events/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedEvent(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/events/{name}";
    return this.patch(path);
  }
  async listCoreV1NamespacedLimitRange(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/limitranges";
    return this.get(path);
  }
  async createCoreV1NamespacedLimitRange(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/limitranges";
    return this.post(path);
  }
  async deleteCoreV1CollectionNamespacedLimitRange(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/limitranges";
    return this.delete(path);
  }
  async readCoreV1NamespacedLimitRange() {
    const path = "/api/v1/namespaces/{namespace}/limitranges/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedLimitRange(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/limitranges/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedLimitRange(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/limitranges/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedLimitRange(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/limitranges/{name}";
    return this.patch(path);
  }
  async listCoreV1NamespacedPersistentVolumeClaim(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims";
    return this.get(path);
  }
  async createCoreV1NamespacedPersistentVolumeClaim(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims";
    return this.post(path);
  }
  async deleteCoreV1CollectionNamespacedPersistentVolumeClaim(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims";
    return this.delete(path);
  }
  async readCoreV1NamespacedPersistentVolumeClaim() {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedPersistentVolumeClaim(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedPersistentVolumeClaim(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedPersistentVolumeClaim(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}";
    return this.patch(path);
  }
  async readCoreV1NamespacedPersistentVolumeClaimStatus() {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status";
    return this.get(path);
  }
  async replaceCoreV1NamespacedPersistentVolumeClaimStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status";
    return this.put(path);
  }
  async patchCoreV1NamespacedPersistentVolumeClaimStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status";
    return this.patch(path);
  }
  async listCoreV1NamespacedPod(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/pods";
    return this.get(path);
  }
  async createCoreV1NamespacedPod(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/pods";
    return this.post(path);
  }
  async deleteCoreV1CollectionNamespacedPod(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/pods";
    return this.delete(path);
  }
  async readCoreV1NamespacedPod() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedPod(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedPod(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedPod(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}";
    return this.patch(path);
  }
  async connectCoreV1GetNamespacedPodAttach() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/attach";
    return this.get(path);
  }
  async connectCoreV1PostNamespacedPodAttach() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/attach";
    return this.post(path);
  }
  async createCoreV1NamespacedPodBinding(body) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/binding";
    return this.post(path);
  }
  async createCoreV1NamespacedPodEviction(body) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/eviction";
    return this.post(path);
  }
  async connectCoreV1GetNamespacedPodExec() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/exec";
    return this.get(path);
  }
  async connectCoreV1PostNamespacedPodExec() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/exec";
    return this.post(path);
  }
  async readCoreV1NamespacedPodLog() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/log";
    return this.get(path);
  }
  async connectCoreV1GetNamespacedPodPortforward() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/portforward";
    return this.get(path);
  }
  async connectCoreV1PostNamespacedPodPortforward() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/portforward";
    return this.post(path);
  }
  async connectCoreV1GetNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.get(path);
  }
  async connectCoreV1PostNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.post(path);
  }
  async connectCoreV1PutNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.put(path);
  }
  async connectCoreV1DeleteNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.delete(path);
  }
  async connectCoreV1OptionsNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.options(path);
  }
  async connectCoreV1HeadNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.head(path);
  }
  async connectCoreV1PatchNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.patch(path);
  }
  async connectCoreV1GetNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.get(path);
  }
  async connectCoreV1PostNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.post(path);
  }
  async connectCoreV1PutNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.put(path);
  }
  async connectCoreV1DeleteNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.delete(path);
  }
  async connectCoreV1OptionsNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.options(path);
  }
  async connectCoreV1HeadNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.head(path);
  }
  async connectCoreV1PatchNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.patch(path);
  }
  async readCoreV1NamespacedPodStatus() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/status";
    return this.get(path);
  }
  async replaceCoreV1NamespacedPodStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/status";
    return this.put(path);
  }
  async patchCoreV1NamespacedPodStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/status";
    return this.patch(path);
  }
  async listCoreV1NamespacedPodTemplate(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates";
    return this.get(path);
  }
  async createCoreV1NamespacedPodTemplate(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates";
    return this.post(path);
  }
  async deleteCoreV1CollectionNamespacedPodTemplate(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates";
    return this.delete(path);
  }
  async readCoreV1NamespacedPodTemplate() {
    const path = "/api/v1/namespaces/{namespace}/podtemplates/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedPodTemplate(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedPodTemplate(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedPodTemplate(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates/{name}";
    return this.patch(path);
  }
  async listCoreV1NamespacedReplicationController(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers";
    return this.get(path);
  }
  async createCoreV1NamespacedReplicationController(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers";
    return this.post(path);
  }
  async deleteCoreV1CollectionNamespacedReplicationController(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers";
    return this.delete(path);
  }
  async readCoreV1NamespacedReplicationController() {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedReplicationController(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedReplicationController(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedReplicationController(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}";
    return this.patch(path);
  }
  async readCoreV1NamespacedReplicationControllerScale() {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale";
    return this.get(path);
  }
  async replaceCoreV1NamespacedReplicationControllerScale(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale";
    return this.put(path);
  }
  async patchCoreV1NamespacedReplicationControllerScale(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale";
    return this.patch(path);
  }
  async readCoreV1NamespacedReplicationControllerStatus() {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status";
    return this.get(path);
  }
  async replaceCoreV1NamespacedReplicationControllerStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status";
    return this.put(path);
  }
  async patchCoreV1NamespacedReplicationControllerStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status";
    return this.patch(path);
  }
  async listCoreV1NamespacedResourceQuota(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas";
    return this.get(path);
  }
  async createCoreV1NamespacedResourceQuota(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas";
    return this.post(path);
  }
  async deleteCoreV1CollectionNamespacedResourceQuota(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas";
    return this.delete(path);
  }
  async readCoreV1NamespacedResourceQuota() {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedResourceQuota(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedResourceQuota(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedResourceQuota(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}";
    return this.patch(path);
  }
  async readCoreV1NamespacedResourceQuotaStatus() {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}/status";
    return this.get(path);
  }
  async replaceCoreV1NamespacedResourceQuotaStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}/status";
    return this.put(path);
  }
  async patchCoreV1NamespacedResourceQuotaStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}/status";
    return this.patch(path);
  }
  async listCoreV1NamespacedSecret(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/secrets";
    return this.get(path);
  }
  async createCoreV1NamespacedSecret(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/secrets";
    return this.post(path);
  }
  async deleteCoreV1CollectionNamespacedSecret(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/secrets";
    return this.delete(path);
  }
  async readCoreV1NamespacedSecret() {
    const path = "/api/v1/namespaces/{namespace}/secrets/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedSecret(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/secrets/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedSecret(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/secrets/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedSecret(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/secrets/{name}";
    return this.patch(path);
  }
  async listCoreV1NamespacedServiceAccount(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts";
    return this.get(path);
  }
  async createCoreV1NamespacedServiceAccount(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts";
    return this.post(path);
  }
  async deleteCoreV1CollectionNamespacedServiceAccount(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts";
    return this.delete(path);
  }
  async readCoreV1NamespacedServiceAccount() {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedServiceAccount(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedServiceAccount(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedServiceAccount(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts/{name}";
    return this.patch(path);
  }
  async createCoreV1NamespacedServiceAccountToken(body) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts/{name}/token";
    return this.post(path);
  }
  async listCoreV1NamespacedService(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/services";
    return this.get(path);
  }
  async createCoreV1NamespacedService(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/services";
    return this.post(path);
  }
  async readCoreV1NamespacedService() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}";
    return this.get(path);
  }
  async replaceCoreV1NamespacedService(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/services/{name}";
    return this.put(path);
  }
  async deleteCoreV1NamespacedService(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/services/{name}";
    return this.delete(path);
  }
  async patchCoreV1NamespacedService(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/services/{name}";
    return this.patch(path);
  }
  async connectCoreV1GetNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.get(path);
  }
  async connectCoreV1PostNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.post(path);
  }
  async connectCoreV1PutNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.put(path);
  }
  async connectCoreV1DeleteNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.delete(path);
  }
  async connectCoreV1OptionsNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.options(path);
  }
  async connectCoreV1HeadNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.head(path);
  }
  async connectCoreV1PatchNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.patch(path);
  }
  async connectCoreV1GetNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.get(path);
  }
  async connectCoreV1PostNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.post(path);
  }
  async connectCoreV1PutNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.put(path);
  }
  async connectCoreV1DeleteNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.delete(path);
  }
  async connectCoreV1OptionsNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.options(path);
  }
  async connectCoreV1HeadNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.head(path);
  }
  async connectCoreV1PatchNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.patch(path);
  }
  async readCoreV1NamespacedServiceStatus() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/status";
    return this.get(path);
  }
  async replaceCoreV1NamespacedServiceStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/status";
    return this.put(path);
  }
  async patchCoreV1NamespacedServiceStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/status";
    return this.patch(path);
  }
  async readCoreV1Namespace() {
    const path = "/api/v1/namespaces/{name}";
    return this.get(path);
  }
  async replaceCoreV1Namespace(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{name}";
    return this.put(path);
  }
  async deleteCoreV1Namespace(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{name}";
    return this.delete(path);
  }
  async patchCoreV1Namespace(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{name}";
    return this.patch(path);
  }
  async replaceCoreV1NamespaceFinalize(body) {
    const path = "/api/v1/namespaces/{name}/finalize";
    return this.put(path);
  }
  async readCoreV1NamespaceStatus() {
    const path = "/api/v1/namespaces/{name}/status";
    return this.get(path);
  }
  async replaceCoreV1NamespaceStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{name}/status";
    return this.put(path);
  }
  async patchCoreV1NamespaceStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{name}/status";
    return this.patch(path);
  }
  async listCoreV1Node(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/nodes";
    return this.get(path);
  }
  async createCoreV1Node(body, dryRun, fieldManager) {
    const path = "/api/v1/nodes";
    return this.post(path);
  }
  async deleteCoreV1CollectionNode(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/nodes";
    return this.delete(path);
  }
  async readCoreV1Node() {
    const path = "/api/v1/nodes/{name}";
    return this.get(path);
  }
  async replaceCoreV1Node(body, dryRun, fieldManager) {
    const path = "/api/v1/nodes/{name}";
    return this.put(path);
  }
  async deleteCoreV1Node(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/nodes/{name}";
    return this.delete(path);
  }
  async patchCoreV1Node(body, dryRun, fieldManager, force) {
    const path = "/api/v1/nodes/{name}";
    return this.patch(path);
  }
  async connectCoreV1GetNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.get(path);
  }
  async connectCoreV1PostNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.post(path);
  }
  async connectCoreV1PutNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.put(path);
  }
  async connectCoreV1DeleteNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.delete(path);
  }
  async connectCoreV1OptionsNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.options(path);
  }
  async connectCoreV1HeadNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.head(path);
  }
  async connectCoreV1PatchNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.patch(path);
  }
  async connectCoreV1GetNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.get(path);
  }
  async connectCoreV1PostNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.post(path);
  }
  async connectCoreV1PutNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.put(path);
  }
  async connectCoreV1DeleteNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.delete(path);
  }
  async connectCoreV1OptionsNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.options(path);
  }
  async connectCoreV1HeadNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.head(path);
  }
  async connectCoreV1PatchNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.patch(path);
  }
  async readCoreV1NodeStatus() {
    const path = "/api/v1/nodes/{name}/status";
    return this.get(path);
  }
  async replaceCoreV1NodeStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/nodes/{name}/status";
    return this.put(path);
  }
  async patchCoreV1NodeStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/nodes/{name}/status";
    return this.patch(path);
  }
  async listCoreV1PersistentVolumeClaimForAllNamespaces() {
    const path = "/api/v1/persistentvolumeclaims";
    return this.get(path);
  }
  async listCoreV1PersistentVolume(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/persistentvolumes";
    return this.get(path);
  }
  async createCoreV1PersistentVolume(body, dryRun, fieldManager) {
    const path = "/api/v1/persistentvolumes";
    return this.post(path);
  }
  async deleteCoreV1CollectionPersistentVolume(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/persistentvolumes";
    return this.delete(path);
  }
  async readCoreV1PersistentVolume() {
    const path = "/api/v1/persistentvolumes/{name}";
    return this.get(path);
  }
  async replaceCoreV1PersistentVolume(body, dryRun, fieldManager) {
    const path = "/api/v1/persistentvolumes/{name}";
    return this.put(path);
  }
  async deleteCoreV1PersistentVolume(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/persistentvolumes/{name}";
    return this.delete(path);
  }
  async patchCoreV1PersistentVolume(body, dryRun, fieldManager, force) {
    const path = "/api/v1/persistentvolumes/{name}";
    return this.patch(path);
  }
  async readCoreV1PersistentVolumeStatus() {
    const path = "/api/v1/persistentvolumes/{name}/status";
    return this.get(path);
  }
  async replaceCoreV1PersistentVolumeStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/persistentvolumes/{name}/status";
    return this.put(path);
  }
  async patchCoreV1PersistentVolumeStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/persistentvolumes/{name}/status";
    return this.patch(path);
  }
  async listCoreV1PodForAllNamespaces() {
    const path = "/api/v1/pods";
    return this.get(path);
  }
  async listCoreV1PodTemplateForAllNamespaces() {
    const path = "/api/v1/podtemplates";
    return this.get(path);
  }
  async listCoreV1ReplicationControllerForAllNamespaces() {
    const path = "/api/v1/replicationcontrollers";
    return this.get(path);
  }
  async listCoreV1ResourceQuotaForAllNamespaces() {
    const path = "/api/v1/resourcequotas";
    return this.get(path);
  }
  async listCoreV1SecretForAllNamespaces() {
    const path = "/api/v1/secrets";
    return this.get(path);
  }
  async listCoreV1ServiceAccountForAllNamespaces() {
    const path = "/api/v1/serviceaccounts";
    return this.get(path);
  }
  async listCoreV1ServiceForAllNamespaces() {
    const path = "/api/v1/services";
    return this.get(path);
  }
  async watchCoreV1ConfigMapListForAllNamespaces() {
    const path = "/api/v1/watch/configmaps";
    return this.get(path);
  }
  async watchCoreV1EndpointsListForAllNamespaces() {
    const path = "/api/v1/watch/endpoints";
    return this.get(path);
  }
  async watchCoreV1EventListForAllNamespaces() {
    const path = "/api/v1/watch/events";
    return this.get(path);
  }
  async watchCoreV1LimitRangeListForAllNamespaces() {
    const path = "/api/v1/watch/limitranges";
    return this.get(path);
  }
  async watchCoreV1NamespaceList() {
    const path = "/api/v1/watch/namespaces";
    return this.get(path);
  }
  async watchCoreV1NamespacedConfigMapList() {
    const path = "/api/v1/watch/namespaces/{namespace}/configmaps";
    return this.get(path);
  }
  async watchCoreV1NamespacedConfigMap() {
    const path = "/api/v1/watch/namespaces/{namespace}/configmaps/{name}";
    return this.get(path);
  }
  async watchCoreV1NamespacedEndpointsList() {
    const path = "/api/v1/watch/namespaces/{namespace}/endpoints";
    return this.get(path);
  }
  async watchCoreV1NamespacedEndpoints() {
    const path = "/api/v1/watch/namespaces/{namespace}/endpoints/{name}";
    return this.get(path);
  }
  async watchCoreV1NamespacedEventList() {
    const path = "/api/v1/watch/namespaces/{namespace}/events";
    return this.get(path);
  }
  async watchCoreV1NamespacedEvent() {
    const path = "/api/v1/watch/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  async watchCoreV1NamespacedLimitRangeList() {
    const path = "/api/v1/watch/namespaces/{namespace}/limitranges";
    return this.get(path);
  }
  async watchCoreV1NamespacedLimitRange() {
    const path = "/api/v1/watch/namespaces/{namespace}/limitranges/{name}";
    return this.get(path);
  }
  async watchCoreV1NamespacedPersistentVolumeClaimList() {
    const path = "/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims";
    return this.get(path);
  }
  async watchCoreV1NamespacedPersistentVolumeClaim() {
    const path = "/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims/{name}";
    return this.get(path);
  }
  async watchCoreV1NamespacedPodList() {
    const path = "/api/v1/watch/namespaces/{namespace}/pods";
    return this.get(path);
  }
  async watchCoreV1NamespacedPod() {
    const path = "/api/v1/watch/namespaces/{namespace}/pods/{name}";
    return this.get(path);
  }
  async watchCoreV1NamespacedPodTemplateList() {
    const path = "/api/v1/watch/namespaces/{namespace}/podtemplates";
    return this.get(path);
  }
  async watchCoreV1NamespacedPodTemplate() {
    const path = "/api/v1/watch/namespaces/{namespace}/podtemplates/{name}";
    return this.get(path);
  }
  async watchCoreV1NamespacedReplicationControllerList() {
    const path = "/api/v1/watch/namespaces/{namespace}/replicationcontrollers";
    return this.get(path);
  }
  async watchCoreV1NamespacedReplicationController() {
    const path = "/api/v1/watch/namespaces/{namespace}/replicationcontrollers/{name}";
    return this.get(path);
  }
  async watchCoreV1NamespacedResourceQuotaList() {
    const path = "/api/v1/watch/namespaces/{namespace}/resourcequotas";
    return this.get(path);
  }
  async watchCoreV1NamespacedResourceQuota() {
    const path = "/api/v1/watch/namespaces/{namespace}/resourcequotas/{name}";
    return this.get(path);
  }
  async watchCoreV1NamespacedSecretList() {
    const path = "/api/v1/watch/namespaces/{namespace}/secrets";
    return this.get(path);
  }
  async watchCoreV1NamespacedSecret() {
    const path = "/api/v1/watch/namespaces/{namespace}/secrets/{name}";
    return this.get(path);
  }
  async watchCoreV1NamespacedServiceAccountList() {
    const path = "/api/v1/watch/namespaces/{namespace}/serviceaccounts";
    return this.get(path);
  }
  async watchCoreV1NamespacedServiceAccount() {
    const path = "/api/v1/watch/namespaces/{namespace}/serviceaccounts/{name}";
    return this.get(path);
  }
  async watchCoreV1NamespacedServiceList() {
    const path = "/api/v1/watch/namespaces/{namespace}/services";
    return this.get(path);
  }
  async watchCoreV1NamespacedService() {
    const path = "/api/v1/watch/namespaces/{namespace}/services/{name}";
    return this.get(path);
  }
  async watchCoreV1Namespace() {
    const path = "/api/v1/watch/namespaces/{name}";
    return this.get(path);
  }
  async watchCoreV1NodeList() {
    const path = "/api/v1/watch/nodes";
    return this.get(path);
  }
  async watchCoreV1Node() {
    const path = "/api/v1/watch/nodes/{name}";
    return this.get(path);
  }
  async watchCoreV1PersistentVolumeClaimListForAllNamespaces() {
    const path = "/api/v1/watch/persistentvolumeclaims";
    return this.get(path);
  }
  async watchCoreV1PersistentVolumeList() {
    const path = "/api/v1/watch/persistentvolumes";
    return this.get(path);
  }
  async watchCoreV1PersistentVolume() {
    const path = "/api/v1/watch/persistentvolumes/{name}";
    return this.get(path);
  }
  async watchCoreV1PodListForAllNamespaces() {
    const path = "/api/v1/watch/pods";
    return this.get(path);
  }
  async watchCoreV1PodTemplateListForAllNamespaces() {
    const path = "/api/v1/watch/podtemplates";
    return this.get(path);
  }
  async watchCoreV1ReplicationControllerListForAllNamespaces() {
    const path = "/api/v1/watch/replicationcontrollers";
    return this.get(path);
  }
  async watchCoreV1ResourceQuotaListForAllNamespaces() {
    const path = "/api/v1/watch/resourcequotas";
    return this.get(path);
  }
  async watchCoreV1SecretListForAllNamespaces() {
    const path = "/api/v1/watch/secrets";
    return this.get(path);
  }
  async watchCoreV1ServiceAccountListForAllNamespaces() {
    const path = "/api/v1/watch/serviceaccounts";
    return this.get(path);
  }
  async watchCoreV1ServiceListForAllNamespaces() {
    const path = "/api/v1/watch/services";
    return this.get(path);
  }
  async getAPIVersions() {
    const path = "/apis/";
    return this.get(path);
  }
  async getAdmissionregistrationAPIGroup() {
    const path = "/apis/admissionregistration.k8s.io/";
    return this.get(path);
  }
  async getAdmissionregistrationV1APIResources() {
    const path = "/apis/admissionregistration.k8s.io/v1/";
    return this.get(path);
  }
  async listAdmissionregistrationV1MutatingWebhookConfiguration(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations";
    return this.get(path);
  }
  async createAdmissionregistrationV1MutatingWebhookConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations";
    return this.post(path);
  }
  async deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations";
    return this.delete(path);
  }
  async readAdmissionregistrationV1MutatingWebhookConfiguration() {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}";
    return this.get(path);
  }
  async replaceAdmissionregistrationV1MutatingWebhookConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}";
    return this.put(path);
  }
  async deleteAdmissionregistrationV1MutatingWebhookConfiguration(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}";
    return this.delete(path);
  }
  async patchAdmissionregistrationV1MutatingWebhookConfiguration(body, dryRun, fieldManager, force) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}";
    return this.patch(path);
  }
  async listAdmissionregistrationV1ValidatingWebhookConfiguration(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations";
    return this.get(path);
  }
  async createAdmissionregistrationV1ValidatingWebhookConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations";
    return this.post(path);
  }
  async deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations";
    return this.delete(path);
  }
  async readAdmissionregistrationV1ValidatingWebhookConfiguration() {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}";
    return this.get(path);
  }
  async replaceAdmissionregistrationV1ValidatingWebhookConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}";
    return this.put(path);
  }
  async deleteAdmissionregistrationV1ValidatingWebhookConfiguration(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}";
    return this.delete(path);
  }
  async patchAdmissionregistrationV1ValidatingWebhookConfiguration(body, dryRun, fieldManager, force) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}";
    return this.patch(path);
  }
  async watchAdmissionregistrationV1MutatingWebhookConfigurationList() {
    const path = "/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations";
    return this.get(path);
  }
  async watchAdmissionregistrationV1MutatingWebhookConfiguration() {
    const path = "/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/{name}";
    return this.get(path);
  }
  async watchAdmissionregistrationV1ValidatingWebhookConfigurationList() {
    const path = "/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations";
    return this.get(path);
  }
  async watchAdmissionregistrationV1ValidatingWebhookConfiguration() {
    const path = "/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/{name}";
    return this.get(path);
  }
  async getApiextensionsAPIGroup() {
    const path = "/apis/apiextensions.k8s.io/";
    return this.get(path);
  }
  async getApiextensionsV1APIResources() {
    const path = "/apis/apiextensions.k8s.io/v1/";
    return this.get(path);
  }
  async listApiextensionsV1CustomResourceDefinition(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions";
    return this.get(path);
  }
  async createApiextensionsV1CustomResourceDefinition(body, dryRun, fieldManager) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions";
    return this.post(path);
  }
  async deleteApiextensionsV1CollectionCustomResourceDefinition(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions";
    return this.delete(path);
  }
  async readApiextensionsV1CustomResourceDefinition() {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}";
    return this.get(path);
  }
  async replaceApiextensionsV1CustomResourceDefinition(body, dryRun, fieldManager) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}";
    return this.put(path);
  }
  async deleteApiextensionsV1CustomResourceDefinition(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}";
    return this.delete(path);
  }
  async patchApiextensionsV1CustomResourceDefinition(body, dryRun, fieldManager, force) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}";
    return this.patch(path);
  }
  async readApiextensionsV1CustomResourceDefinitionStatus() {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status";
    return this.get(path);
  }
  async replaceApiextensionsV1CustomResourceDefinitionStatus(body, dryRun, fieldManager) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status";
    return this.put(path);
  }
  async patchApiextensionsV1CustomResourceDefinitionStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status";
    return this.patch(path);
  }
  async watchApiextensionsV1CustomResourceDefinitionList() {
    const path = "/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions";
    return this.get(path);
  }
  async watchApiextensionsV1CustomResourceDefinition() {
    const path = "/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/{name}";
    return this.get(path);
  }
  async getApiregistrationAPIGroup() {
    const path = "/apis/apiregistration.k8s.io/";
    return this.get(path);
  }
  async getApiregistrationV1APIResources() {
    const path = "/apis/apiregistration.k8s.io/v1/";
    return this.get(path);
  }
  async listApiregistrationV1APIService(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices";
    return this.get(path);
  }
  async createApiregistrationV1APIService(body, dryRun, fieldManager) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices";
    return this.post(path);
  }
  async deleteApiregistrationV1CollectionAPIService(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices";
    return this.delete(path);
  }
  async readApiregistrationV1APIService() {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}";
    return this.get(path);
  }
  async replaceApiregistrationV1APIService(body, dryRun, fieldManager) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}";
    return this.put(path);
  }
  async deleteApiregistrationV1APIService(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}";
    return this.delete(path);
  }
  async patchApiregistrationV1APIService(body, dryRun, fieldManager, force) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}";
    return this.patch(path);
  }
  async readApiregistrationV1APIServiceStatus() {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}/status";
    return this.get(path);
  }
  async replaceApiregistrationV1APIServiceStatus(body, dryRun, fieldManager) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}/status";
    return this.put(path);
  }
  async patchApiregistrationV1APIServiceStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}/status";
    return this.patch(path);
  }
  async watchApiregistrationV1APIServiceList() {
    const path = "/apis/apiregistration.k8s.io/v1/watch/apiservices";
    return this.get(path);
  }
  async watchApiregistrationV1APIService() {
    const path = "/apis/apiregistration.k8s.io/v1/watch/apiservices/{name}";
    return this.get(path);
  }
  async getAppsAPIGroup() {
    const path = "/apis/apps/";
    return this.get(path);
  }
  async getAppsV1APIResources() {
    const path = "/apis/apps/v1/";
    return this.get(path);
  }
  async listAppsV1ControllerRevisionForAllNamespaces() {
    const path = "/apis/apps/v1/controllerrevisions";
    return this.get(path);
  }
  async listAppsV1DaemonSetForAllNamespaces() {
    const path = "/apis/apps/v1/daemonsets";
    return this.get(path);
  }
  async listAppsV1DeploymentForAllNamespaces() {
    const path = "/apis/apps/v1/deployments";
    return this.get(path);
  }
  async listAppsV1NamespacedControllerRevision(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions";
    return this.get(path);
  }
  async createAppsV1NamespacedControllerRevision(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions";
    return this.post(path);
  }
  async deleteAppsV1CollectionNamespacedControllerRevision(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions";
    return this.delete(path);
  }
  async readAppsV1NamespacedControllerRevision() {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}";
    return this.get(path);
  }
  async replaceAppsV1NamespacedControllerRevision(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}";
    return this.put(path);
  }
  async deleteAppsV1NamespacedControllerRevision(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}";
    return this.delete(path);
  }
  async patchAppsV1NamespacedControllerRevision(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}";
    return this.patch(path);
  }
  async listAppsV1NamespacedDaemonSet(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets";
    return this.get(path);
  }
  async createAppsV1NamespacedDaemonSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets";
    return this.post(path);
  }
  async deleteAppsV1CollectionNamespacedDaemonSet(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets";
    return this.delete(path);
  }
  async readAppsV1NamespacedDaemonSet() {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}";
    return this.get(path);
  }
  async replaceAppsV1NamespacedDaemonSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}";
    return this.put(path);
  }
  async deleteAppsV1NamespacedDaemonSet(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}";
    return this.delete(path);
  }
  async patchAppsV1NamespacedDaemonSet(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}";
    return this.patch(path);
  }
  async readAppsV1NamespacedDaemonSetStatus() {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status";
    return this.get(path);
  }
  async replaceAppsV1NamespacedDaemonSetStatus(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status";
    return this.put(path);
  }
  async patchAppsV1NamespacedDaemonSetStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status";
    return this.patch(path);
  }
  async listAppsV1NamespacedDeployment(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments";
    return this.get(path);
  }
  async createAppsV1NamespacedDeployment(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments";
    return this.post(path);
  }
  async deleteAppsV1CollectionNamespacedDeployment(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments";
    return this.delete(path);
  }
  async readAppsV1NamespacedDeployment() {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}";
    return this.get(path);
  }
  async replaceAppsV1NamespacedDeployment(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}";
    return this.put(path);
  }
  async deleteAppsV1NamespacedDeployment(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}";
    return this.delete(path);
  }
  async patchAppsV1NamespacedDeployment(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}";
    return this.patch(path);
  }
  async readAppsV1NamespacedDeploymentScale() {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale";
    return this.get(path);
  }
  async replaceAppsV1NamespacedDeploymentScale(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale";
    return this.put(path);
  }
  async patchAppsV1NamespacedDeploymentScale(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale";
    return this.patch(path);
  }
  async readAppsV1NamespacedDeploymentStatus() {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status";
    return this.get(path);
  }
  async replaceAppsV1NamespacedDeploymentStatus(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status";
    return this.put(path);
  }
  async patchAppsV1NamespacedDeploymentStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status";
    return this.patch(path);
  }
  async listAppsV1NamespacedReplicaSet(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets";
    return this.get(path);
  }
  async createAppsV1NamespacedReplicaSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets";
    return this.post(path);
  }
  async deleteAppsV1CollectionNamespacedReplicaSet(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets";
    return this.delete(path);
  }
  async readAppsV1NamespacedReplicaSet() {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}";
    return this.get(path);
  }
  async replaceAppsV1NamespacedReplicaSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}";
    return this.put(path);
  }
  async deleteAppsV1NamespacedReplicaSet(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}";
    return this.delete(path);
  }
  async patchAppsV1NamespacedReplicaSet(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}";
    return this.patch(path);
  }
  async readAppsV1NamespacedReplicaSetScale() {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale";
    return this.get(path);
  }
  async replaceAppsV1NamespacedReplicaSetScale(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale";
    return this.put(path);
  }
  async patchAppsV1NamespacedReplicaSetScale(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale";
    return this.patch(path);
  }
  async readAppsV1NamespacedReplicaSetStatus() {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status";
    return this.get(path);
  }
  async replaceAppsV1NamespacedReplicaSetStatus(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status";
    return this.put(path);
  }
  async patchAppsV1NamespacedReplicaSetStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status";
    return this.patch(path);
  }
  async listAppsV1NamespacedStatefulSet(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets";
    return this.get(path);
  }
  async createAppsV1NamespacedStatefulSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets";
    return this.post(path);
  }
  async deleteAppsV1CollectionNamespacedStatefulSet(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets";
    return this.delete(path);
  }
  async readAppsV1NamespacedStatefulSet() {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}";
    return this.get(path);
  }
  async replaceAppsV1NamespacedStatefulSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}";
    return this.put(path);
  }
  async deleteAppsV1NamespacedStatefulSet(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}";
    return this.delete(path);
  }
  async patchAppsV1NamespacedStatefulSet(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}";
    return this.patch(path);
  }
  async readAppsV1NamespacedStatefulSetScale() {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale";
    return this.get(path);
  }
  async replaceAppsV1NamespacedStatefulSetScale(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale";
    return this.put(path);
  }
  async patchAppsV1NamespacedStatefulSetScale(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale";
    return this.patch(path);
  }
  async readAppsV1NamespacedStatefulSetStatus() {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status";
    return this.get(path);
  }
  async replaceAppsV1NamespacedStatefulSetStatus(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status";
    return this.put(path);
  }
  async patchAppsV1NamespacedStatefulSetStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status";
    return this.patch(path);
  }
  async listAppsV1ReplicaSetForAllNamespaces() {
    const path = "/apis/apps/v1/replicasets";
    return this.get(path);
  }
  async listAppsV1StatefulSetForAllNamespaces() {
    const path = "/apis/apps/v1/statefulsets";
    return this.get(path);
  }
  async watchAppsV1ControllerRevisionListForAllNamespaces() {
    const path = "/apis/apps/v1/watch/controllerrevisions";
    return this.get(path);
  }
  async watchAppsV1DaemonSetListForAllNamespaces() {
    const path = "/apis/apps/v1/watch/daemonsets";
    return this.get(path);
  }
  async watchAppsV1DeploymentListForAllNamespaces() {
    const path = "/apis/apps/v1/watch/deployments";
    return this.get(path);
  }
  async watchAppsV1NamespacedControllerRevisionList() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions";
    return this.get(path);
  }
  async watchAppsV1NamespacedControllerRevision() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions/{name}";
    return this.get(path);
  }
  async watchAppsV1NamespacedDaemonSetList() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/daemonsets";
    return this.get(path);
  }
  async watchAppsV1NamespacedDaemonSet() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/daemonsets/{name}";
    return this.get(path);
  }
  async watchAppsV1NamespacedDeploymentList() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/deployments";
    return this.get(path);
  }
  async watchAppsV1NamespacedDeployment() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/deployments/{name}";
    return this.get(path);
  }
  async watchAppsV1NamespacedReplicaSetList() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/replicasets";
    return this.get(path);
  }
  async watchAppsV1NamespacedReplicaSet() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/replicasets/{name}";
    return this.get(path);
  }
  async watchAppsV1NamespacedStatefulSetList() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/statefulsets";
    return this.get(path);
  }
  async watchAppsV1NamespacedStatefulSet() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/statefulsets/{name}";
    return this.get(path);
  }
  async watchAppsV1ReplicaSetListForAllNamespaces() {
    const path = "/apis/apps/v1/watch/replicasets";
    return this.get(path);
  }
  async watchAppsV1StatefulSetListForAllNamespaces() {
    const path = "/apis/apps/v1/watch/statefulsets";
    return this.get(path);
  }
  async getAuthenticationAPIGroup() {
    const path = "/apis/authentication.k8s.io/";
    return this.get(path);
  }
  async getAuthenticationV1APIResources() {
    const path = "/apis/authentication.k8s.io/v1/";
    return this.get(path);
  }
  async createAuthenticationV1TokenReview(body) {
    const path = "/apis/authentication.k8s.io/v1/tokenreviews";
    return this.post(path);
  }
  async getAuthorizationAPIGroup() {
    const path = "/apis/authorization.k8s.io/";
    return this.get(path);
  }
  async getAuthorizationV1APIResources() {
    const path = "/apis/authorization.k8s.io/v1/";
    return this.get(path);
  }
  async createAuthorizationV1NamespacedLocalSubjectAccessReview(body) {
    const path = "/apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews";
    return this.post(path);
  }
  async createAuthorizationV1SelfSubjectAccessReview(body) {
    const path = "/apis/authorization.k8s.io/v1/selfsubjectaccessreviews";
    return this.post(path);
  }
  async createAuthorizationV1SelfSubjectRulesReview(body) {
    const path = "/apis/authorization.k8s.io/v1/selfsubjectrulesreviews";
    return this.post(path);
  }
  async createAuthorizationV1SubjectAccessReview(body) {
    const path = "/apis/authorization.k8s.io/v1/subjectaccessreviews";
    return this.post(path);
  }
  async getAutoscalingAPIGroup() {
    const path = "/apis/autoscaling/";
    return this.get(path);
  }
  async getAutoscalingV1APIResources() {
    const path = "/apis/autoscaling/v1/";
    return this.get(path);
  }
  async listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces() {
    const path = "/apis/autoscaling/v1/horizontalpodautoscalers";
    return this.get(path);
  }
  async listAutoscalingV1NamespacedHorizontalPodAutoscaler(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  async createAutoscalingV1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.post(path);
  }
  async deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.delete(path);
  }
  async readAutoscalingV1NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  async replaceAutoscalingV1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.put(path);
  }
  async deleteAutoscalingV1NamespacedHorizontalPodAutoscaler(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.delete(path);
  }
  async patchAutoscalingV1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.patch(path);
  }
  async readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus() {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.get(path);
  }
  async replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.put(path);
  }
  async patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.patch(path);
  }
  async watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces() {
    const path = "/apis/autoscaling/v1/watch/horizontalpodautoscalers";
    return this.get(path);
  }
  async watchAutoscalingV1NamespacedHorizontalPodAutoscalerList() {
    const path = "/apis/autoscaling/v1/watch/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  async watchAutoscalingV1NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v1/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  async getAutoscalingV2beta1APIResources() {
    const path = "/apis/autoscaling/v2beta1/";
    return this.get(path);
  }
  async listAutoscalingV2beta1HorizontalPodAutoscalerForAllNamespaces() {
    const path = "/apis/autoscaling/v2beta1/horizontalpodautoscalers";
    return this.get(path);
  }
  async listAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  async createAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.post(path);
  }
  async deleteAutoscalingV2beta1CollectionNamespacedHorizontalPodAutoscaler(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.delete(path);
  }
  async readAutoscalingV2beta1NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  async replaceAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.put(path);
  }
  async deleteAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.delete(path);
  }
  async patchAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.patch(path);
  }
  async readAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatus() {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.get(path);
  }
  async replaceAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.put(path);
  }
  async patchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.patch(path);
  }
  async watchAutoscalingV2beta1HorizontalPodAutoscalerListForAllNamespaces() {
    const path = "/apis/autoscaling/v2beta1/watch/horizontalpodautoscalers";
    return this.get(path);
  }
  async watchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerList() {
    const path = "/apis/autoscaling/v2beta1/watch/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  async watchAutoscalingV2beta1NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v2beta1/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  async getAutoscalingV2beta2APIResources() {
    const path = "/apis/autoscaling/v2beta2/";
    return this.get(path);
  }
  async listAutoscalingV2beta2HorizontalPodAutoscalerForAllNamespaces() {
    const path = "/apis/autoscaling/v2beta2/horizontalpodautoscalers";
    return this.get(path);
  }
  async listAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  async createAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers";
    return this.post(path);
  }
  async deleteAutoscalingV2beta2CollectionNamespacedHorizontalPodAutoscaler(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers";
    return this.delete(path);
  }
  async readAutoscalingV2beta2NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  async replaceAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.put(path);
  }
  async deleteAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.delete(path);
  }
  async patchAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.patch(path);
  }
  async readAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus() {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.get(path);
  }
  async replaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.put(path);
  }
  async patchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.patch(path);
  }
  async watchAutoscalingV2beta2HorizontalPodAutoscalerListForAllNamespaces() {
    const path = "/apis/autoscaling/v2beta2/watch/horizontalpodautoscalers";
    return this.get(path);
  }
  async watchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerList() {
    const path = "/apis/autoscaling/v2beta2/watch/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  async watchAutoscalingV2beta2NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v2beta2/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  async getBatchAPIGroup() {
    const path = "/apis/batch/";
    return this.get(path);
  }
  async getBatchV1APIResources() {
    const path = "/apis/batch/v1/";
    return this.get(path);
  }
  async listBatchV1CronJobForAllNamespaces() {
    const path = "/apis/batch/v1/cronjobs";
    return this.get(path);
  }
  async listBatchV1JobForAllNamespaces() {
    const path = "/apis/batch/v1/jobs";
    return this.get(path);
  }
  async listBatchV1NamespacedCronJob(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs";
    return this.get(path);
  }
  async createBatchV1NamespacedCronJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs";
    return this.post(path);
  }
  async deleteBatchV1CollectionNamespacedCronJob(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs";
    return this.delete(path);
  }
  async readBatchV1NamespacedCronJob() {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}";
    return this.get(path);
  }
  async replaceBatchV1NamespacedCronJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}";
    return this.put(path);
  }
  async deleteBatchV1NamespacedCronJob(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}";
    return this.delete(path);
  }
  async patchBatchV1NamespacedCronJob(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}";
    return this.patch(path);
  }
  async readBatchV1NamespacedCronJobStatus() {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.get(path);
  }
  async replaceBatchV1NamespacedCronJobStatus(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.put(path);
  }
  async patchBatchV1NamespacedCronJobStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.patch(path);
  }
  async listBatchV1NamespacedJob(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs";
    return this.get(path);
  }
  async createBatchV1NamespacedJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs";
    return this.post(path);
  }
  async deleteBatchV1CollectionNamespacedJob(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs";
    return this.delete(path);
  }
  async readBatchV1NamespacedJob() {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}";
    return this.get(path);
  }
  async replaceBatchV1NamespacedJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}";
    return this.put(path);
  }
  async deleteBatchV1NamespacedJob(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}";
    return this.delete(path);
  }
  async patchBatchV1NamespacedJob(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}";
    return this.patch(path);
  }
  async readBatchV1NamespacedJobStatus() {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status";
    return this.get(path);
  }
  async replaceBatchV1NamespacedJobStatus(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status";
    return this.put(path);
  }
  async patchBatchV1NamespacedJobStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status";
    return this.patch(path);
  }
  async watchBatchV1CronJobListForAllNamespaces() {
    const path = "/apis/batch/v1/watch/cronjobs";
    return this.get(path);
  }
  async watchBatchV1JobListForAllNamespaces() {
    const path = "/apis/batch/v1/watch/jobs";
    return this.get(path);
  }
  async watchBatchV1NamespacedCronJobList() {
    const path = "/apis/batch/v1/watch/namespaces/{namespace}/cronjobs";
    return this.get(path);
  }
  async watchBatchV1NamespacedCronJob() {
    const path = "/apis/batch/v1/watch/namespaces/{namespace}/cronjobs/{name}";
    return this.get(path);
  }
  async watchBatchV1NamespacedJobList() {
    const path = "/apis/batch/v1/watch/namespaces/{namespace}/jobs";
    return this.get(path);
  }
  async watchBatchV1NamespacedJob() {
    const path = "/apis/batch/v1/watch/namespaces/{namespace}/jobs/{name}";
    return this.get(path);
  }
  async getBatchV1beta1APIResources() {
    const path = "/apis/batch/v1beta1/";
    return this.get(path);
  }
  async listBatchV1beta1CronJobForAllNamespaces() {
    const path = "/apis/batch/v1beta1/cronjobs";
    return this.get(path);
  }
  async listBatchV1beta1NamespacedCronJob(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs";
    return this.get(path);
  }
  async createBatchV1beta1NamespacedCronJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs";
    return this.post(path);
  }
  async deleteBatchV1beta1CollectionNamespacedCronJob(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs";
    return this.delete(path);
  }
  async readBatchV1beta1NamespacedCronJob() {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}";
    return this.get(path);
  }
  async replaceBatchV1beta1NamespacedCronJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}";
    return this.put(path);
  }
  async deleteBatchV1beta1NamespacedCronJob(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}";
    return this.delete(path);
  }
  async patchBatchV1beta1NamespacedCronJob(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}";
    return this.patch(path);
  }
  async readBatchV1beta1NamespacedCronJobStatus() {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.get(path);
  }
  async replaceBatchV1beta1NamespacedCronJobStatus(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.put(path);
  }
  async patchBatchV1beta1NamespacedCronJobStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.patch(path);
  }
  async watchBatchV1beta1CronJobListForAllNamespaces() {
    const path = "/apis/batch/v1beta1/watch/cronjobs";
    return this.get(path);
  }
  async watchBatchV1beta1NamespacedCronJobList() {
    const path = "/apis/batch/v1beta1/watch/namespaces/{namespace}/cronjobs";
    return this.get(path);
  }
  async watchBatchV1beta1NamespacedCronJob() {
    const path = "/apis/batch/v1beta1/watch/namespaces/{namespace}/cronjobs/{name}";
    return this.get(path);
  }
  async getCertificatesAPIGroup() {
    const path = "/apis/certificates.k8s.io/";
    return this.get(path);
  }
  async getCertificatesV1APIResources() {
    const path = "/apis/certificates.k8s.io/v1/";
    return this.get(path);
  }
  async listCertificatesV1CertificateSigningRequest(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests";
    return this.get(path);
  }
  async createCertificatesV1CertificateSigningRequest(body, dryRun, fieldManager) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests";
    return this.post(path);
  }
  async deleteCertificatesV1CollectionCertificateSigningRequest(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests";
    return this.delete(path);
  }
  async readCertificatesV1CertificateSigningRequest() {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}";
    return this.get(path);
  }
  async replaceCertificatesV1CertificateSigningRequest(body, dryRun, fieldManager) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}";
    return this.put(path);
  }
  async deleteCertificatesV1CertificateSigningRequest(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}";
    return this.delete(path);
  }
  async patchCertificatesV1CertificateSigningRequest(body, dryRun, fieldManager, force) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}";
    return this.patch(path);
  }
  async readCertificatesV1CertificateSigningRequestApproval() {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval";
    return this.get(path);
  }
  async replaceCertificatesV1CertificateSigningRequestApproval(body, dryRun, fieldManager) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval";
    return this.put(path);
  }
  async patchCertificatesV1CertificateSigningRequestApproval(body, dryRun, fieldManager, force) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval";
    return this.patch(path);
  }
  async readCertificatesV1CertificateSigningRequestStatus() {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status";
    return this.get(path);
  }
  async replaceCertificatesV1CertificateSigningRequestStatus(body, dryRun, fieldManager) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status";
    return this.put(path);
  }
  async patchCertificatesV1CertificateSigningRequestStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status";
    return this.patch(path);
  }
  async watchCertificatesV1CertificateSigningRequestList() {
    const path = "/apis/certificates.k8s.io/v1/watch/certificatesigningrequests";
    return this.get(path);
  }
  async watchCertificatesV1CertificateSigningRequest() {
    const path = "/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/{name}";
    return this.get(path);
  }
  async getCoordinationAPIGroup() {
    const path = "/apis/coordination.k8s.io/";
    return this.get(path);
  }
  async getCoordinationV1APIResources() {
    const path = "/apis/coordination.k8s.io/v1/";
    return this.get(path);
  }
  async listCoordinationV1LeaseForAllNamespaces() {
    const path = "/apis/coordination.k8s.io/v1/leases";
    return this.get(path);
  }
  async listCoordinationV1NamespacedLease(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases";
    return this.get(path);
  }
  async createCoordinationV1NamespacedLease(body, dryRun, fieldManager) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases";
    return this.post(path);
  }
  async deleteCoordinationV1CollectionNamespacedLease(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases";
    return this.delete(path);
  }
  async readCoordinationV1NamespacedLease() {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}";
    return this.get(path);
  }
  async replaceCoordinationV1NamespacedLease(body, dryRun, fieldManager) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}";
    return this.put(path);
  }
  async deleteCoordinationV1NamespacedLease(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}";
    return this.delete(path);
  }
  async patchCoordinationV1NamespacedLease(body, dryRun, fieldManager, force) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}";
    return this.patch(path);
  }
  async watchCoordinationV1LeaseListForAllNamespaces() {
    const path = "/apis/coordination.k8s.io/v1/watch/leases";
    return this.get(path);
  }
  async watchCoordinationV1NamespacedLeaseList() {
    const path = "/apis/coordination.k8s.io/v1/watch/namespaces/{namespace}/leases";
    return this.get(path);
  }
  async watchCoordinationV1NamespacedLease() {
    const path = "/apis/coordination.k8s.io/v1/watch/namespaces/{namespace}/leases/{name}";
    return this.get(path);
  }
  async getDiscoveryAPIGroup() {
    const path = "/apis/discovery.k8s.io/";
    return this.get(path);
  }
  async getDiscoveryV1APIResources() {
    const path = "/apis/discovery.k8s.io/v1/";
    return this.get(path);
  }
  async listDiscoveryV1EndpointSliceForAllNamespaces() {
    const path = "/apis/discovery.k8s.io/v1/endpointslices";
    return this.get(path);
  }
  async listDiscoveryV1NamespacedEndpointSlice(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices";
    return this.get(path);
  }
  async createDiscoveryV1NamespacedEndpointSlice(body, dryRun, fieldManager) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices";
    return this.post(path);
  }
  async deleteDiscoveryV1CollectionNamespacedEndpointSlice(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices";
    return this.delete(path);
  }
  async readDiscoveryV1NamespacedEndpointSlice() {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}";
    return this.get(path);
  }
  async replaceDiscoveryV1NamespacedEndpointSlice(body, dryRun, fieldManager) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}";
    return this.put(path);
  }
  async deleteDiscoveryV1NamespacedEndpointSlice(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}";
    return this.delete(path);
  }
  async patchDiscoveryV1NamespacedEndpointSlice(body, dryRun, fieldManager, force) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}";
    return this.patch(path);
  }
  async watchDiscoveryV1EndpointSliceListForAllNamespaces() {
    const path = "/apis/discovery.k8s.io/v1/watch/endpointslices";
    return this.get(path);
  }
  async watchDiscoveryV1NamespacedEndpointSliceList() {
    const path = "/apis/discovery.k8s.io/v1/watch/namespaces/{namespace}/endpointslices";
    return this.get(path);
  }
  async watchDiscoveryV1NamespacedEndpointSlice() {
    const path = "/apis/discovery.k8s.io/v1/watch/namespaces/{namespace}/endpointslices/{name}";
    return this.get(path);
  }
  async getDiscoveryV1beta1APIResources() {
    const path = "/apis/discovery.k8s.io/v1beta1/";
    return this.get(path);
  }
  async listDiscoveryV1beta1EndpointSliceForAllNamespaces() {
    const path = "/apis/discovery.k8s.io/v1beta1/endpointslices";
    return this.get(path);
  }
  async listDiscoveryV1beta1NamespacedEndpointSlice(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices";
    return this.get(path);
  }
  async createDiscoveryV1beta1NamespacedEndpointSlice(body, dryRun, fieldManager) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices";
    return this.post(path);
  }
  async deleteDiscoveryV1beta1CollectionNamespacedEndpointSlice(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices";
    return this.delete(path);
  }
  async readDiscoveryV1beta1NamespacedEndpointSlice() {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices/{name}";
    return this.get(path);
  }
  async replaceDiscoveryV1beta1NamespacedEndpointSlice(body, dryRun, fieldManager) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices/{name}";
    return this.put(path);
  }
  async deleteDiscoveryV1beta1NamespacedEndpointSlice(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices/{name}";
    return this.delete(path);
  }
  async patchDiscoveryV1beta1NamespacedEndpointSlice(body, dryRun, fieldManager, force) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices/{name}";
    return this.patch(path);
  }
  async watchDiscoveryV1beta1EndpointSliceListForAllNamespaces() {
    const path = "/apis/discovery.k8s.io/v1beta1/watch/endpointslices";
    return this.get(path);
  }
  async watchDiscoveryV1beta1NamespacedEndpointSliceList() {
    const path = "/apis/discovery.k8s.io/v1beta1/watch/namespaces/{namespace}/endpointslices";
    return this.get(path);
  }
  async watchDiscoveryV1beta1NamespacedEndpointSlice() {
    const path = "/apis/discovery.k8s.io/v1beta1/watch/namespaces/{namespace}/endpointslices/{name}";
    return this.get(path);
  }
  async getEventsAPIGroup() {
    const path = "/apis/events.k8s.io/";
    return this.get(path);
  }
  async getEventsV1APIResources() {
    const path = "/apis/events.k8s.io/v1/";
    return this.get(path);
  }
  async listEventsV1EventForAllNamespaces() {
    const path = "/apis/events.k8s.io/v1/events";
    return this.get(path);
  }
  async listEventsV1NamespacedEvent(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events";
    return this.get(path);
  }
  async createEventsV1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events";
    return this.post(path);
  }
  async deleteEventsV1CollectionNamespacedEvent(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events";
    return this.delete(path);
  }
  async readEventsV1NamespacedEvent() {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  async replaceEventsV1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}";
    return this.put(path);
  }
  async deleteEventsV1NamespacedEvent(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}";
    return this.delete(path);
  }
  async patchEventsV1NamespacedEvent(body, dryRun, fieldManager, force) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}";
    return this.patch(path);
  }
  async watchEventsV1EventListForAllNamespaces() {
    const path = "/apis/events.k8s.io/v1/watch/events";
    return this.get(path);
  }
  async watchEventsV1NamespacedEventList() {
    const path = "/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events";
    return this.get(path);
  }
  async watchEventsV1NamespacedEvent() {
    const path = "/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  async getEventsV1beta1APIResources() {
    const path = "/apis/events.k8s.io/v1beta1/";
    return this.get(path);
  }
  async listEventsV1beta1EventForAllNamespaces() {
    const path = "/apis/events.k8s.io/v1beta1/events";
    return this.get(path);
  }
  async listEventsV1beta1NamespacedEvent(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events";
    return this.get(path);
  }
  async createEventsV1beta1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events";
    return this.post(path);
  }
  async deleteEventsV1beta1CollectionNamespacedEvent(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events";
    return this.delete(path);
  }
  async readEventsV1beta1NamespacedEvent() {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  async replaceEventsV1beta1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events/{name}";
    return this.put(path);
  }
  async deleteEventsV1beta1NamespacedEvent(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events/{name}";
    return this.delete(path);
  }
  async patchEventsV1beta1NamespacedEvent(body, dryRun, fieldManager, force) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events/{name}";
    return this.patch(path);
  }
  async watchEventsV1beta1EventListForAllNamespaces() {
    const path = "/apis/events.k8s.io/v1beta1/watch/events";
    return this.get(path);
  }
  async watchEventsV1beta1NamespacedEventList() {
    const path = "/apis/events.k8s.io/v1beta1/watch/namespaces/{namespace}/events";
    return this.get(path);
  }
  async watchEventsV1beta1NamespacedEvent() {
    const path = "/apis/events.k8s.io/v1beta1/watch/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  async getFlowcontrolApiserverAPIGroup() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/";
    return this.get(path);
  }
  async getFlowcontrolApiserverV1beta1APIResources() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/";
    return this.get(path);
  }
  async listFlowcontrolApiserverV1beta1FlowSchema(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas";
    return this.get(path);
  }
  async createFlowcontrolApiserverV1beta1FlowSchema(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas";
    return this.post(path);
  }
  async deleteFlowcontrolApiserverV1beta1CollectionFlowSchema(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas";
    return this.delete(path);
  }
  async readFlowcontrolApiserverV1beta1FlowSchema() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}";
    return this.get(path);
  }
  async replaceFlowcontrolApiserverV1beta1FlowSchema(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}";
    return this.put(path);
  }
  async deleteFlowcontrolApiserverV1beta1FlowSchema(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}";
    return this.delete(path);
  }
  async patchFlowcontrolApiserverV1beta1FlowSchema(body, dryRun, fieldManager, force) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}";
    return this.patch(path);
  }
  async readFlowcontrolApiserverV1beta1FlowSchemaStatus() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}/status";
    return this.get(path);
  }
  async replaceFlowcontrolApiserverV1beta1FlowSchemaStatus(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}/status";
    return this.put(path);
  }
  async patchFlowcontrolApiserverV1beta1FlowSchemaStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}/status";
    return this.patch(path);
  }
  async listFlowcontrolApiserverV1beta1PriorityLevelConfiguration(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations";
    return this.get(path);
  }
  async createFlowcontrolApiserverV1beta1PriorityLevelConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations";
    return this.post(path);
  }
  async deleteFlowcontrolApiserverV1beta1CollectionPriorityLevelConfiguration(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations";
    return this.delete(path);
  }
  async readFlowcontrolApiserverV1beta1PriorityLevelConfiguration() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}";
    return this.get(path);
  }
  async replaceFlowcontrolApiserverV1beta1PriorityLevelConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}";
    return this.put(path);
  }
  async deleteFlowcontrolApiserverV1beta1PriorityLevelConfiguration(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}";
    return this.delete(path);
  }
  async patchFlowcontrolApiserverV1beta1PriorityLevelConfiguration(body, dryRun, fieldManager, force) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}";
    return this.patch(path);
  }
  async readFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}/status";
    return this.get(path);
  }
  async replaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}/status";
    return this.put(path);
  }
  async patchFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}/status";
    return this.patch(path);
  }
  async watchFlowcontrolApiserverV1beta1FlowSchemaList() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/flowschemas";
    return this.get(path);
  }
  async watchFlowcontrolApiserverV1beta1FlowSchema() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/flowschemas/{name}";
    return this.get(path);
  }
  async watchFlowcontrolApiserverV1beta1PriorityLevelConfigurationList() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/prioritylevelconfigurations";
    return this.get(path);
  }
  async watchFlowcontrolApiserverV1beta1PriorityLevelConfiguration() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/prioritylevelconfigurations/{name}";
    return this.get(path);
  }
  async getNetworkingAPIGroup() {
    const path = "/apis/networking.k8s.io/";
    return this.get(path);
  }
  async getNetworkingV1APIResources() {
    const path = "/apis/networking.k8s.io/v1/";
    return this.get(path);
  }
  async listNetworkingV1IngressClass(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses";
    return this.get(path);
  }
  async createNetworkingV1IngressClass(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses";
    return this.post(path);
  }
  async deleteNetworkingV1CollectionIngressClass(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses";
    return this.delete(path);
  }
  async readNetworkingV1IngressClass() {
    const path = "/apis/networking.k8s.io/v1/ingressclasses/{name}";
    return this.get(path);
  }
  async replaceNetworkingV1IngressClass(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses/{name}";
    return this.put(path);
  }
  async deleteNetworkingV1IngressClass(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses/{name}";
    return this.delete(path);
  }
  async patchNetworkingV1IngressClass(body, dryRun, fieldManager, force) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses/{name}";
    return this.patch(path);
  }
  async listNetworkingV1IngressForAllNamespaces() {
    const path = "/apis/networking.k8s.io/v1/ingresses";
    return this.get(path);
  }
  async listNetworkingV1NamespacedIngress(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses";
    return this.get(path);
  }
  async createNetworkingV1NamespacedIngress(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses";
    return this.post(path);
  }
  async deleteNetworkingV1CollectionNamespacedIngress(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses";
    return this.delete(path);
  }
  async readNetworkingV1NamespacedIngress() {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}";
    return this.get(path);
  }
  async replaceNetworkingV1NamespacedIngress(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}";
    return this.put(path);
  }
  async deleteNetworkingV1NamespacedIngress(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}";
    return this.delete(path);
  }
  async patchNetworkingV1NamespacedIngress(body, dryRun, fieldManager, force) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}";
    return this.patch(path);
  }
  async readNetworkingV1NamespacedIngressStatus() {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status";
    return this.get(path);
  }
  async replaceNetworkingV1NamespacedIngressStatus(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status";
    return this.put(path);
  }
  async patchNetworkingV1NamespacedIngressStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status";
    return this.patch(path);
  }
  async listNetworkingV1NamespacedNetworkPolicy(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies";
    return this.get(path);
  }
  async createNetworkingV1NamespacedNetworkPolicy(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies";
    return this.post(path);
  }
  async deleteNetworkingV1CollectionNamespacedNetworkPolicy(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies";
    return this.delete(path);
  }
  async readNetworkingV1NamespacedNetworkPolicy() {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}";
    return this.get(path);
  }
  async replaceNetworkingV1NamespacedNetworkPolicy(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}";
    return this.put(path);
  }
  async deleteNetworkingV1NamespacedNetworkPolicy(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}";
    return this.delete(path);
  }
  async patchNetworkingV1NamespacedNetworkPolicy(body, dryRun, fieldManager, force) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}";
    return this.patch(path);
  }
  async listNetworkingV1NetworkPolicyForAllNamespaces() {
    const path = "/apis/networking.k8s.io/v1/networkpolicies";
    return this.get(path);
  }
  async watchNetworkingV1IngressClassList() {
    const path = "/apis/networking.k8s.io/v1/watch/ingressclasses";
    return this.get(path);
  }
  async watchNetworkingV1IngressClass() {
    const path = "/apis/networking.k8s.io/v1/watch/ingressclasses/{name}";
    return this.get(path);
  }
  async watchNetworkingV1IngressListForAllNamespaces() {
    const path = "/apis/networking.k8s.io/v1/watch/ingresses";
    return this.get(path);
  }
  async watchNetworkingV1NamespacedIngressList() {
    const path = "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses";
    return this.get(path);
  }
  async watchNetworkingV1NamespacedIngress() {
    const path = "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses/{name}";
    return this.get(path);
  }
  async watchNetworkingV1NamespacedNetworkPolicyList() {
    const path = "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies";
    return this.get(path);
  }
  async watchNetworkingV1NamespacedNetworkPolicy() {
    const path = "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies/{name}";
    return this.get(path);
  }
  async watchNetworkingV1NetworkPolicyListForAllNamespaces() {
    const path = "/apis/networking.k8s.io/v1/watch/networkpolicies";
    return this.get(path);
  }
  async getNodeAPIGroup() {
    const path = "/apis/node.k8s.io/";
    return this.get(path);
  }
  async getNodeV1APIResources() {
    const path = "/apis/node.k8s.io/v1/";
    return this.get(path);
  }
  async listNodeV1RuntimeClass(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses";
    return this.get(path);
  }
  async createNodeV1RuntimeClass(body, dryRun, fieldManager) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses";
    return this.post(path);
  }
  async deleteNodeV1CollectionRuntimeClass(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses";
    return this.delete(path);
  }
  async readNodeV1RuntimeClass() {
    const path = "/apis/node.k8s.io/v1/runtimeclasses/{name}";
    return this.get(path);
  }
  async replaceNodeV1RuntimeClass(body, dryRun, fieldManager) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses/{name}";
    return this.put(path);
  }
  async deleteNodeV1RuntimeClass(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses/{name}";
    return this.delete(path);
  }
  async patchNodeV1RuntimeClass(body, dryRun, fieldManager, force) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses/{name}";
    return this.patch(path);
  }
  async watchNodeV1RuntimeClassList() {
    const path = "/apis/node.k8s.io/v1/watch/runtimeclasses";
    return this.get(path);
  }
  async watchNodeV1RuntimeClass() {
    const path = "/apis/node.k8s.io/v1/watch/runtimeclasses/{name}";
    return this.get(path);
  }
  async getNodeV1beta1APIResources() {
    const path = "/apis/node.k8s.io/v1beta1/";
    return this.get(path);
  }
  async listNodeV1beta1RuntimeClass(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses";
    return this.get(path);
  }
  async createNodeV1beta1RuntimeClass(body, dryRun, fieldManager) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses";
    return this.post(path);
  }
  async deleteNodeV1beta1CollectionRuntimeClass(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses";
    return this.delete(path);
  }
  async readNodeV1beta1RuntimeClass() {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses/{name}";
    return this.get(path);
  }
  async replaceNodeV1beta1RuntimeClass(body, dryRun, fieldManager) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses/{name}";
    return this.put(path);
  }
  async deleteNodeV1beta1RuntimeClass(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses/{name}";
    return this.delete(path);
  }
  async patchNodeV1beta1RuntimeClass(body, dryRun, fieldManager, force) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses/{name}";
    return this.patch(path);
  }
  async watchNodeV1beta1RuntimeClassList() {
    const path = "/apis/node.k8s.io/v1beta1/watch/runtimeclasses";
    return this.get(path);
  }
  async watchNodeV1beta1RuntimeClass() {
    const path = "/apis/node.k8s.io/v1beta1/watch/runtimeclasses/{name}";
    return this.get(path);
  }
  async getPolicyAPIGroup() {
    const path = "/apis/policy/";
    return this.get(path);
  }
  async getPolicyV1APIResources() {
    const path = "/apis/policy/v1/";
    return this.get(path);
  }
  async listPolicyV1NamespacedPodDisruptionBudget(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets";
    return this.get(path);
  }
  async createPolicyV1NamespacedPodDisruptionBudget(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets";
    return this.post(path);
  }
  async deletePolicyV1CollectionNamespacedPodDisruptionBudget(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets";
    return this.delete(path);
  }
  async readPolicyV1NamespacedPodDisruptionBudget() {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.get(path);
  }
  async replacePolicyV1NamespacedPodDisruptionBudget(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.put(path);
  }
  async deletePolicyV1NamespacedPodDisruptionBudget(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.delete(path);
  }
  async patchPolicyV1NamespacedPodDisruptionBudget(body, dryRun, fieldManager, force) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.patch(path);
  }
  async readPolicyV1NamespacedPodDisruptionBudgetStatus() {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.get(path);
  }
  async replacePolicyV1NamespacedPodDisruptionBudgetStatus(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.put(path);
  }
  async patchPolicyV1NamespacedPodDisruptionBudgetStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.patch(path);
  }
  async listPolicyV1PodDisruptionBudgetForAllNamespaces() {
    const path = "/apis/policy/v1/poddisruptionbudgets";
    return this.get(path);
  }
  async watchPolicyV1NamespacedPodDisruptionBudgetList() {
    const path = "/apis/policy/v1/watch/namespaces/{namespace}/poddisruptionbudgets";
    return this.get(path);
  }
  async watchPolicyV1NamespacedPodDisruptionBudget() {
    const path = "/apis/policy/v1/watch/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.get(path);
  }
  async watchPolicyV1PodDisruptionBudgetListForAllNamespaces() {
    const path = "/apis/policy/v1/watch/poddisruptionbudgets";
    return this.get(path);
  }
  async getPolicyV1beta1APIResources() {
    const path = "/apis/policy/v1beta1/";
    return this.get(path);
  }
  async listPolicyV1beta1NamespacedPodDisruptionBudget(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets";
    return this.get(path);
  }
  async createPolicyV1beta1NamespacedPodDisruptionBudget(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets";
    return this.post(path);
  }
  async deletePolicyV1beta1CollectionNamespacedPodDisruptionBudget(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets";
    return this.delete(path);
  }
  async readPolicyV1beta1NamespacedPodDisruptionBudget() {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.get(path);
  }
  async replacePolicyV1beta1NamespacedPodDisruptionBudget(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.put(path);
  }
  async deletePolicyV1beta1NamespacedPodDisruptionBudget(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.delete(path);
  }
  async patchPolicyV1beta1NamespacedPodDisruptionBudget(body, dryRun, fieldManager, force) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.patch(path);
  }
  async readPolicyV1beta1NamespacedPodDisruptionBudgetStatus() {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.get(path);
  }
  async replacePolicyV1beta1NamespacedPodDisruptionBudgetStatus(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.put(path);
  }
  async patchPolicyV1beta1NamespacedPodDisruptionBudgetStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.patch(path);
  }
  async listPolicyV1beta1PodDisruptionBudgetForAllNamespaces() {
    const path = "/apis/policy/v1beta1/poddisruptionbudgets";
    return this.get(path);
  }
  async listPolicyV1beta1PodSecurityPolicy(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies";
    return this.get(path);
  }
  async createPolicyV1beta1PodSecurityPolicy(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies";
    return this.post(path);
  }
  async deletePolicyV1beta1CollectionPodSecurityPolicy(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies";
    return this.delete(path);
  }
  async readPolicyV1beta1PodSecurityPolicy() {
    const path = "/apis/policy/v1beta1/podsecuritypolicies/{name}";
    return this.get(path);
  }
  async replacePolicyV1beta1PodSecurityPolicy(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies/{name}";
    return this.put(path);
  }
  async deletePolicyV1beta1PodSecurityPolicy(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies/{name}";
    return this.delete(path);
  }
  async patchPolicyV1beta1PodSecurityPolicy(body, dryRun, fieldManager, force) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies/{name}";
    return this.patch(path);
  }
  async watchPolicyV1beta1NamespacedPodDisruptionBudgetList() {
    const path = "/apis/policy/v1beta1/watch/namespaces/{namespace}/poddisruptionbudgets";
    return this.get(path);
  }
  async watchPolicyV1beta1NamespacedPodDisruptionBudget() {
    const path = "/apis/policy/v1beta1/watch/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.get(path);
  }
  async watchPolicyV1beta1PodDisruptionBudgetListForAllNamespaces() {
    const path = "/apis/policy/v1beta1/watch/poddisruptionbudgets";
    return this.get(path);
  }
  async watchPolicyV1beta1PodSecurityPolicyList() {
    const path = "/apis/policy/v1beta1/watch/podsecuritypolicies";
    return this.get(path);
  }
  async watchPolicyV1beta1PodSecurityPolicy() {
    const path = "/apis/policy/v1beta1/watch/podsecuritypolicies/{name}";
    return this.get(path);
  }
  async getRbacAuthorizationAPIGroup() {
    const path = "/apis/rbac.authorization.k8s.io/";
    return this.get(path);
  }
  async getRbacAuthorizationV1APIResources() {
    const path = "/apis/rbac.authorization.k8s.io/v1/";
    return this.get(path);
  }
  async listRbacAuthorizationV1ClusterRoleBinding(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings";
    return this.get(path);
  }
  async createRbacAuthorizationV1ClusterRoleBinding(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings";
    return this.post(path);
  }
  async deleteRbacAuthorizationV1CollectionClusterRoleBinding(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings";
    return this.delete(path);
  }
  async readRbacAuthorizationV1ClusterRoleBinding() {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}";
    return this.get(path);
  }
  async replaceRbacAuthorizationV1ClusterRoleBinding(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}";
    return this.put(path);
  }
  async deleteRbacAuthorizationV1ClusterRoleBinding(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}";
    return this.delete(path);
  }
  async patchRbacAuthorizationV1ClusterRoleBinding(body, dryRun, fieldManager, force) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}";
    return this.patch(path);
  }
  async listRbacAuthorizationV1ClusterRole(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles";
    return this.get(path);
  }
  async createRbacAuthorizationV1ClusterRole(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles";
    return this.post(path);
  }
  async deleteRbacAuthorizationV1CollectionClusterRole(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles";
    return this.delete(path);
  }
  async readRbacAuthorizationV1ClusterRole() {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}";
    return this.get(path);
  }
  async replaceRbacAuthorizationV1ClusterRole(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}";
    return this.put(path);
  }
  async deleteRbacAuthorizationV1ClusterRole(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}";
    return this.delete(path);
  }
  async patchRbacAuthorizationV1ClusterRole(body, dryRun, fieldManager, force) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}";
    return this.patch(path);
  }
  async listRbacAuthorizationV1NamespacedRoleBinding(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings";
    return this.get(path);
  }
  async createRbacAuthorizationV1NamespacedRoleBinding(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings";
    return this.post(path);
  }
  async deleteRbacAuthorizationV1CollectionNamespacedRoleBinding(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings";
    return this.delete(path);
  }
  async readRbacAuthorizationV1NamespacedRoleBinding() {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}";
    return this.get(path);
  }
  async replaceRbacAuthorizationV1NamespacedRoleBinding(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}";
    return this.put(path);
  }
  async deleteRbacAuthorizationV1NamespacedRoleBinding(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}";
    return this.delete(path);
  }
  async patchRbacAuthorizationV1NamespacedRoleBinding(body, dryRun, fieldManager, force) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}";
    return this.patch(path);
  }
  async listRbacAuthorizationV1NamespacedRole(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles";
    return this.get(path);
  }
  async createRbacAuthorizationV1NamespacedRole(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles";
    return this.post(path);
  }
  async deleteRbacAuthorizationV1CollectionNamespacedRole(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles";
    return this.delete(path);
  }
  async readRbacAuthorizationV1NamespacedRole() {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}";
    return this.get(path);
  }
  async replaceRbacAuthorizationV1NamespacedRole(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}";
    return this.put(path);
  }
  async deleteRbacAuthorizationV1NamespacedRole(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}";
    return this.delete(path);
  }
  async patchRbacAuthorizationV1NamespacedRole(body, dryRun, fieldManager, force) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}";
    return this.patch(path);
  }
  async listRbacAuthorizationV1RoleBindingForAllNamespaces() {
    const path = "/apis/rbac.authorization.k8s.io/v1/rolebindings";
    return this.get(path);
  }
  async listRbacAuthorizationV1RoleForAllNamespaces() {
    const path = "/apis/rbac.authorization.k8s.io/v1/roles";
    return this.get(path);
  }
  async watchRbacAuthorizationV1ClusterRoleBindingList() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings";
    return this.get(path);
  }
  async watchRbacAuthorizationV1ClusterRoleBinding() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/{name}";
    return this.get(path);
  }
  async watchRbacAuthorizationV1ClusterRoleList() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/clusterroles";
    return this.get(path);
  }
  async watchRbacAuthorizationV1ClusterRole() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/{name}";
    return this.get(path);
  }
  async watchRbacAuthorizationV1NamespacedRoleBindingList() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/rolebindings";
    return this.get(path);
  }
  async watchRbacAuthorizationV1NamespacedRoleBinding() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/rolebindings/{name}";
    return this.get(path);
  }
  async watchRbacAuthorizationV1NamespacedRoleList() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/roles";
    return this.get(path);
  }
  async watchRbacAuthorizationV1NamespacedRole() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/roles/{name}";
    return this.get(path);
  }
  async watchRbacAuthorizationV1RoleBindingListForAllNamespaces() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/rolebindings";
    return this.get(path);
  }
  async watchRbacAuthorizationV1RoleListForAllNamespaces() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/roles";
    return this.get(path);
  }
  async getSchedulingAPIGroup() {
    const path = "/apis/scheduling.k8s.io/";
    return this.get(path);
  }
  async getSchedulingV1APIResources() {
    const path = "/apis/scheduling.k8s.io/v1/";
    return this.get(path);
  }
  async listSchedulingV1PriorityClass(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses";
    return this.get(path);
  }
  async createSchedulingV1PriorityClass(body, dryRun, fieldManager) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses";
    return this.post(path);
  }
  async deleteSchedulingV1CollectionPriorityClass(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses";
    return this.delete(path);
  }
  async readSchedulingV1PriorityClass() {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses/{name}";
    return this.get(path);
  }
  async replaceSchedulingV1PriorityClass(body, dryRun, fieldManager) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses/{name}";
    return this.put(path);
  }
  async deleteSchedulingV1PriorityClass(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses/{name}";
    return this.delete(path);
  }
  async patchSchedulingV1PriorityClass(body, dryRun, fieldManager, force) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses/{name}";
    return this.patch(path);
  }
  async watchSchedulingV1PriorityClassList() {
    const path = "/apis/scheduling.k8s.io/v1/watch/priorityclasses";
    return this.get(path);
  }
  async watchSchedulingV1PriorityClass() {
    const path = "/apis/scheduling.k8s.io/v1/watch/priorityclasses/{name}";
    return this.get(path);
  }
  async getStorageAPIGroup() {
    const path = "/apis/storage.k8s.io/";
    return this.get(path);
  }
  async getStorageV1APIResources() {
    const path = "/apis/storage.k8s.io/v1/";
    return this.get(path);
  }
  async listStorageV1CSIDriver(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/storage.k8s.io/v1/csidrivers";
    return this.get(path);
  }
  async createStorageV1CSIDriver(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/csidrivers";
    return this.post(path);
  }
  async deleteStorageV1CollectionCSIDriver(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/storage.k8s.io/v1/csidrivers";
    return this.delete(path);
  }
  async readStorageV1CSIDriver() {
    const path = "/apis/storage.k8s.io/v1/csidrivers/{name}";
    return this.get(path);
  }
  async replaceStorageV1CSIDriver(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/csidrivers/{name}";
    return this.put(path);
  }
  async deleteStorageV1CSIDriver(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/storage.k8s.io/v1/csidrivers/{name}";
    return this.delete(path);
  }
  async patchStorageV1CSIDriver(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1/csidrivers/{name}";
    return this.patch(path);
  }
  async listStorageV1CSINode(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/storage.k8s.io/v1/csinodes";
    return this.get(path);
  }
  async createStorageV1CSINode(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/csinodes";
    return this.post(path);
  }
  async deleteStorageV1CollectionCSINode(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/storage.k8s.io/v1/csinodes";
    return this.delete(path);
  }
  async readStorageV1CSINode() {
    const path = "/apis/storage.k8s.io/v1/csinodes/{name}";
    return this.get(path);
  }
  async replaceStorageV1CSINode(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/csinodes/{name}";
    return this.put(path);
  }
  async deleteStorageV1CSINode(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/storage.k8s.io/v1/csinodes/{name}";
    return this.delete(path);
  }
  async patchStorageV1CSINode(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1/csinodes/{name}";
    return this.patch(path);
  }
  async listStorageV1StorageClass(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/storage.k8s.io/v1/storageclasses";
    return this.get(path);
  }
  async createStorageV1StorageClass(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/storageclasses";
    return this.post(path);
  }
  async deleteStorageV1CollectionStorageClass(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/storage.k8s.io/v1/storageclasses";
    return this.delete(path);
  }
  async readStorageV1StorageClass() {
    const path = "/apis/storage.k8s.io/v1/storageclasses/{name}";
    return this.get(path);
  }
  async replaceStorageV1StorageClass(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/storageclasses/{name}";
    return this.put(path);
  }
  async deleteStorageV1StorageClass(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/storage.k8s.io/v1/storageclasses/{name}";
    return this.delete(path);
  }
  async patchStorageV1StorageClass(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1/storageclasses/{name}";
    return this.patch(path);
  }
  async listStorageV1VolumeAttachment(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments";
    return this.get(path);
  }
  async createStorageV1VolumeAttachment(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments";
    return this.post(path);
  }
  async deleteStorageV1CollectionVolumeAttachment(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments";
    return this.delete(path);
  }
  async readStorageV1VolumeAttachment() {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}";
    return this.get(path);
  }
  async replaceStorageV1VolumeAttachment(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}";
    return this.put(path);
  }
  async deleteStorageV1VolumeAttachment(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}";
    return this.delete(path);
  }
  async patchStorageV1VolumeAttachment(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}";
    return this.patch(path);
  }
  async readStorageV1VolumeAttachmentStatus() {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}/status";
    return this.get(path);
  }
  async replaceStorageV1VolumeAttachmentStatus(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}/status";
    return this.put(path);
  }
  async patchStorageV1VolumeAttachmentStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}/status";
    return this.patch(path);
  }
  async watchStorageV1CSIDriverList() {
    const path = "/apis/storage.k8s.io/v1/watch/csidrivers";
    return this.get(path);
  }
  async watchStorageV1CSIDriver() {
    const path = "/apis/storage.k8s.io/v1/watch/csidrivers/{name}";
    return this.get(path);
  }
  async watchStorageV1CSINodeList() {
    const path = "/apis/storage.k8s.io/v1/watch/csinodes";
    return this.get(path);
  }
  async watchStorageV1CSINode() {
    const path = "/apis/storage.k8s.io/v1/watch/csinodes/{name}";
    return this.get(path);
  }
  async watchStorageV1StorageClassList() {
    const path = "/apis/storage.k8s.io/v1/watch/storageclasses";
    return this.get(path);
  }
  async watchStorageV1StorageClass() {
    const path = "/apis/storage.k8s.io/v1/watch/storageclasses/{name}";
    return this.get(path);
  }
  async watchStorageV1VolumeAttachmentList() {
    const path = "/apis/storage.k8s.io/v1/watch/volumeattachments";
    return this.get(path);
  }
  async watchStorageV1VolumeAttachment() {
    const path = "/apis/storage.k8s.io/v1/watch/volumeattachments/{name}";
    return this.get(path);
  }
  async getStorageV1beta1APIResources() {
    const path = "/apis/storage.k8s.io/v1beta1/";
    return this.get(path);
  }
  async listStorageV1beta1CSIStorageCapacityForAllNamespaces() {
    const path = "/apis/storage.k8s.io/v1beta1/csistoragecapacities";
    return this.get(path);
  }
  async listStorageV1beta1NamespacedCSIStorageCapacity(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities";
    return this.get(path);
  }
  async createStorageV1beta1NamespacedCSIStorageCapacity(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities";
    return this.post(path);
  }
  async deleteStorageV1beta1CollectionNamespacedCSIStorageCapacity(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities";
    return this.delete(path);
  }
  async readStorageV1beta1NamespacedCSIStorageCapacity() {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities/{name}";
    return this.get(path);
  }
  async replaceStorageV1beta1NamespacedCSIStorageCapacity(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities/{name}";
    return this.put(path);
  }
  async deleteStorageV1beta1NamespacedCSIStorageCapacity(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities/{name}";
    return this.delete(path);
  }
  async patchStorageV1beta1NamespacedCSIStorageCapacity(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities/{name}";
    return this.patch(path);
  }
  async watchStorageV1beta1CSIStorageCapacityListForAllNamespaces() {
    const path = "/apis/storage.k8s.io/v1beta1/watch/csistoragecapacities";
    return this.get(path);
  }
  async watchStorageV1beta1NamespacedCSIStorageCapacityList() {
    const path = "/apis/storage.k8s.io/v1beta1/watch/namespaces/{namespace}/csistoragecapacities";
    return this.get(path);
  }
  async watchStorageV1beta1NamespacedCSIStorageCapacity() {
    const path = "/apis/storage.k8s.io/v1beta1/watch/namespaces/{namespace}/csistoragecapacities/{name}";
    return this.get(path);
  }
  async logFileListHandler() {
    const path = "/logs/";
    return this.get(path);
  }
  async logFileHandler() {
    const path = "/logs/{logpath}";
    return this.get(path);
  }
  async getServiceAccountIssuerOpenIDKeyset() {
    const path = "/openid/v1/jwks/";
    return this.get(path);
  }
  async getCodeVersion() {
    const path = "/version/";
    return this.get(path);
  }
}