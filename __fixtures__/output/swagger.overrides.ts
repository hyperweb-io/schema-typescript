export interface IoK8sApiAdmissionregistrationV1MutatingWebhook {
  admissionReviewVersions: string[];
  clientConfig: IoK8sApiAdmissionregistrationV1WebhookClientConfig;
  failurePolicy?: string;
  matchPolicy?: string;
  name: string;
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  objectSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  reinvocationPolicy?: string;
  rules?: IoK8sApiAdmissionregistrationV1RuleWithOperations[];
  sideEffects: string;
  timeoutSeconds?: number;
}
export interface IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  webhooks?: IoK8sApiAdmissionregistrationV1MutatingWebhook[];
}
export interface IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList {
  apiVersion?: string;
  items: IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiAdmissionregistrationV1RuleWithOperations {
  apiGroups?: string[];
  apiVersions?: string[];
  operations?: string[];
  resources?: string[];
  scope?: string;
}
export interface IoK8sApiAdmissionregistrationV1ServiceReference {
  name: string;
  namespace: string;
  path?: string;
  port?: number;
}
export interface IoK8sApiAdmissionregistrationV1ValidatingWebhook {
  admissionReviewVersions: string[];
  clientConfig: IoK8sApiAdmissionregistrationV1WebhookClientConfig;
  failurePolicy?: string;
  matchPolicy?: string;
  name: string;
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  objectSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  rules?: IoK8sApiAdmissionregistrationV1RuleWithOperations[];
  sideEffects: string;
  timeoutSeconds?: number;
}
export interface IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  webhooks?: IoK8sApiAdmissionregistrationV1ValidatingWebhook[];
}
export interface IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList {
  apiVersion?: string;
  items: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiAdmissionregistrationV1WebhookClientConfig {
  caBundle?: string;
  service?: IoK8sApiAdmissionregistrationV1ServiceReference;
  url?: string;
}
export interface IoK8sApiAppsV1ControllerRevision {
  apiVersion?: string;
  data?: IoK8sApimachineryPkgRuntimeRawExtension;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  revision: number;
}
export interface IoK8sApiAppsV1ControllerRevisionList {
  apiVersion?: string;
  items: IoK8sApiAppsV1ControllerRevision[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiAppsV1DaemonSet {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAppsV1DaemonSetSpec;
  status?: IoK8sApiAppsV1DaemonSetStatus;
}
export interface IoK8sApiAppsV1DaemonSetCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiAppsV1DaemonSetList {
  apiVersion?: string;
  items: IoK8sApiAppsV1DaemonSet[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiAppsV1DaemonSetSpec {
  minReadySeconds?: number;
  revisionHistoryLimit?: number;
  selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  template: IoK8sApiCoreV1PodTemplateSpec;
  updateStrategy?: IoK8sApiAppsV1DaemonSetUpdateStrategy;
}
export interface IoK8sApiAppsV1DaemonSetStatus {
  collisionCount?: number;
  conditions?: IoK8sApiAppsV1DaemonSetCondition[];
  currentNumberScheduled: number;
  desiredNumberScheduled: number;
  numberAvailable?: number;
  numberMisscheduled: number;
  numberReady: number;
  numberUnavailable?: number;
  observedGeneration?: number;
  updatedNumberScheduled?: number;
}
export interface IoK8sApiAppsV1DaemonSetUpdateStrategy {
  rollingUpdate?: IoK8sApiAppsV1RollingUpdateDaemonSet;
  type?: string;
}
export interface IoK8sApiAppsV1Deployment {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAppsV1DeploymentSpec;
  status?: IoK8sApiAppsV1DeploymentStatus;
}
export interface IoK8sApiAppsV1DeploymentCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  lastUpdateTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiAppsV1DeploymentList {
  apiVersion?: string;
  items: IoK8sApiAppsV1Deployment[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiAppsV1DeploymentSpec {
  minReadySeconds?: number;
  paused?: boolean;
  progressDeadlineSeconds?: number;
  replicas?: number;
  revisionHistoryLimit?: number;
  selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  strategy?: IoK8sApiAppsV1DeploymentStrategy;
  template: IoK8sApiCoreV1PodTemplateSpec;
}
export interface IoK8sApiAppsV1DeploymentStatus {
  availableReplicas?: number;
  collisionCount?: number;
  conditions?: IoK8sApiAppsV1DeploymentCondition[];
  observedGeneration?: number;
  readyReplicas?: number;
  replicas?: number;
  unavailableReplicas?: number;
  updatedReplicas?: number;
}
export interface IoK8sApiAppsV1DeploymentStrategy {
  rollingUpdate?: IoK8sApiAppsV1RollingUpdateDeployment;
  type?: string;
}
export interface IoK8sApiAppsV1ReplicaSet {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAppsV1ReplicaSetSpec;
  status?: IoK8sApiAppsV1ReplicaSetStatus;
}
export interface IoK8sApiAppsV1ReplicaSetCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiAppsV1ReplicaSetList {
  apiVersion?: string;
  items: IoK8sApiAppsV1ReplicaSet[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiAppsV1ReplicaSetSpec {
  minReadySeconds?: number;
  replicas?: number;
  selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  template?: IoK8sApiCoreV1PodTemplateSpec;
}
export interface IoK8sApiAppsV1ReplicaSetStatus {
  availableReplicas?: number;
  conditions?: IoK8sApiAppsV1ReplicaSetCondition[];
  fullyLabeledReplicas?: number;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
}
export interface IoK8sApiAppsV1RollingUpdateDaemonSet {
  maxSurge?: IoK8sApimachineryPkgUtilIntstrIntOrString;
  maxUnavailable?: IoK8sApimachineryPkgUtilIntstrIntOrString;
}
export interface IoK8sApiAppsV1RollingUpdateDeployment {
  maxSurge?: IoK8sApimachineryPkgUtilIntstrIntOrString;
  maxUnavailable?: IoK8sApimachineryPkgUtilIntstrIntOrString;
}
export interface IoK8sApiAppsV1RollingUpdateStatefulSetStrategy {
  partition?: number;
}
export interface IoK8sApiAppsV1StatefulSet {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAppsV1StatefulSetSpec;
  status?: IoK8sApiAppsV1StatefulSetStatus;
}
export interface IoK8sApiAppsV1StatefulSetCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiAppsV1StatefulSetList {
  apiVersion?: string;
  items: IoK8sApiAppsV1StatefulSet[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiAppsV1StatefulSetSpec {
  minReadySeconds?: number;
  podManagementPolicy?: string;
  replicas?: number;
  revisionHistoryLimit?: number;
  selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  serviceName: string;
  template: IoK8sApiCoreV1PodTemplateSpec;
  updateStrategy?: IoK8sApiAppsV1StatefulSetUpdateStrategy;
  volumeClaimTemplates?: IoK8sApiCoreV1PersistentVolumeClaim[];
}
export interface IoK8sApiAppsV1StatefulSetStatus {
  availableReplicas?: number;
  collisionCount?: number;
  conditions?: IoK8sApiAppsV1StatefulSetCondition[];
  currentReplicas?: number;
  currentRevision?: string;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
  updateRevision?: string;
  updatedReplicas?: number;
}
export interface IoK8sApiAppsV1StatefulSetUpdateStrategy {
  rollingUpdate?: IoK8sApiAppsV1RollingUpdateStatefulSetStrategy;
  type?: string;
}
export interface IoK8sApiAuthenticationV1BoundObjectReference {
  apiVersion?: string;
  kind?: string;
  name?: string;
  uid?: string;
}
export interface IoK8sApiAuthenticationV1TokenRequest {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiAuthenticationV1TokenRequestSpec;
  status?: IoK8sApiAuthenticationV1TokenRequestStatus;
}
export interface IoK8sApiAuthenticationV1TokenRequestSpec {
  audiences: string[];
  boundObjectRef?: IoK8sApiAuthenticationV1BoundObjectReference;
  expirationSeconds?: number;
}
export interface IoK8sApiAuthenticationV1TokenRequestStatus {
  expirationTimestamp: IoK8sApimachineryPkgApisMetaV1Time;
  token: string;
}
export interface IoK8sApiAuthenticationV1TokenReview {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiAuthenticationV1TokenReviewSpec;
  status?: IoK8sApiAuthenticationV1TokenReviewStatus;
}
export interface IoK8sApiAuthenticationV1TokenReviewSpec {
  audiences?: string[];
  token?: string;
}
export interface IoK8sApiAuthenticationV1TokenReviewStatus {
  audiences?: string[];
  authenticated?: boolean;
  error?: string;
  user?: IoK8sApiAuthenticationV1UserInfo;
}
export interface IoK8sApiAuthenticationV1UserInfo {
  extra?: {
    [key: string]: unknown;
  };
  groups?: string[];
  uid?: string;
  username?: string;
}
export interface IoK8sApiAuthorizationV1LocalSubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiAuthorizationV1SubjectAccessReviewSpec;
  status?: IoK8sApiAuthorizationV1SubjectAccessReviewStatus;
}
export interface IoK8sApiAuthorizationV1NonResourceAttributes {
  path?: string;
  verb?: string;
}
export interface IoK8sApiAuthorizationV1NonResourceRule {
  nonResourceURLs?: string[];
  verbs: string[];
}
export interface IoK8sApiAuthorizationV1ResourceAttributes {
  group?: string;
  name?: string;
  namespace?: string;
  resource?: string;
  subresource?: string;
  verb?: string;
  version?: string;
}
export interface IoK8sApiAuthorizationV1ResourceRule {
  apiGroups?: string[];
  resourceNames?: string[];
  resources?: string[];
  verbs: string[];
}
export interface IoK8sApiAuthorizationV1SelfSubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec;
  status?: IoK8sApiAuthorizationV1SubjectAccessReviewStatus;
}
export interface IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec {
  nonResourceAttributes?: IoK8sApiAuthorizationV1NonResourceAttributes;
  resourceAttributes?: IoK8sApiAuthorizationV1ResourceAttributes;
}
export interface IoK8sApiAuthorizationV1SelfSubjectRulesReview {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec;
  status?: IoK8sApiAuthorizationV1SubjectRulesReviewStatus;
}
export interface IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec {
  namespace?: string;
}
export interface IoK8sApiAuthorizationV1SubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiAuthorizationV1SubjectAccessReviewSpec;
  status?: IoK8sApiAuthorizationV1SubjectAccessReviewStatus;
}
export interface IoK8sApiAuthorizationV1SubjectAccessReviewSpec {
  extra?: {
    [key: string]: unknown;
  };
  groups?: string[];
  nonResourceAttributes?: IoK8sApiAuthorizationV1NonResourceAttributes;
  resourceAttributes?: IoK8sApiAuthorizationV1ResourceAttributes;
  uid?: string;
  user?: string;
}
export interface IoK8sApiAuthorizationV1SubjectAccessReviewStatus {
  allowed: boolean;
  denied?: boolean;
  evaluationError?: string;
  reason?: string;
}
export interface IoK8sApiAuthorizationV1SubjectRulesReviewStatus {
  evaluationError?: string;
  incomplete: boolean;
  nonResourceRules: IoK8sApiAuthorizationV1NonResourceRule[];
  resourceRules: IoK8sApiAuthorizationV1ResourceRule[];
}
export interface IoK8sApiAutoscalingV1CrossVersionObjectReference {
  apiVersion?: string;
  kind: string;
  name: string;
}
export interface IoK8sApiAutoscalingV1HorizontalPodAutoscaler {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec;
  status?: IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus;
}
export interface IoK8sApiAutoscalingV1HorizontalPodAutoscalerList {
  apiVersion?: string;
  items: IoK8sApiAutoscalingV1HorizontalPodAutoscaler[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec {
  maxReplicas: number;
  minReplicas?: number;
  scaleTargetRef: IoK8sApiAutoscalingV1CrossVersionObjectReference;
  targetCPUUtilizationPercentage?: number;
}
export interface IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus {
  currentCPUUtilizationPercentage?: number;
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: IoK8sApimachineryPkgApisMetaV1Time;
  observedGeneration?: number;
}
export interface IoK8sApiAutoscalingV1Scale {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAutoscalingV1ScaleSpec;
  status?: IoK8sApiAutoscalingV1ScaleStatus;
}
export interface IoK8sApiAutoscalingV1ScaleSpec {
  replicas?: number;
}
export interface IoK8sApiAutoscalingV1ScaleStatus {
  replicas: number;
  selector?: string;
}
export interface IoK8sApiAutoscalingV2beta1ContainerResourceMetricSource {
  container: string;
  name: string;
  targetAverageUtilization?: number;
  targetAverageValue?: IoK8sApimachineryPkgApiResourceQuantity;
}
export interface IoK8sApiAutoscalingV2beta1ContainerResourceMetricStatus {
  container: string;
  currentAverageUtilization?: number;
  currentAverageValue: IoK8sApimachineryPkgApiResourceQuantity;
  name: string;
}
export interface IoK8sApiAutoscalingV2beta1CrossVersionObjectReference {
  apiVersion?: string;
  kind: string;
  name: string;
}
export interface IoK8sApiAutoscalingV2beta1ExternalMetricSource {
  metricName: string;
  metricSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  targetAverageValue?: IoK8sApimachineryPkgApiResourceQuantity;
  targetValue?: IoK8sApimachineryPkgApiResourceQuantity;
}
export interface IoK8sApiAutoscalingV2beta1ExternalMetricStatus {
  currentAverageValue?: IoK8sApimachineryPkgApiResourceQuantity;
  currentValue: IoK8sApimachineryPkgApiResourceQuantity;
  metricName: string;
  metricSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
}
export interface IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerSpec;
  status?: IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus;
}
export interface IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList {
  apiVersion?: string;
  items: IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerSpec {
  maxReplicas: number;
  metrics?: IoK8sApiAutoscalingV2beta1MetricSpec[];
  minReplicas?: number;
  scaleTargetRef: IoK8sApiAutoscalingV2beta1CrossVersionObjectReference;
}
export interface IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus {
  conditions: IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition[];
  currentMetrics?: IoK8sApiAutoscalingV2beta1MetricStatus[];
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: IoK8sApimachineryPkgApisMetaV1Time;
  observedGeneration?: number;
}
export interface IoK8sApiAutoscalingV2beta1MetricSpec {
  containerResource?: IoK8sApiAutoscalingV2beta1ContainerResourceMetricSource;
  external?: IoK8sApiAutoscalingV2beta1ExternalMetricSource;
  object?: IoK8sApiAutoscalingV2beta1ObjectMetricSource;
  pods?: IoK8sApiAutoscalingV2beta1PodsMetricSource;
  resource?: IoK8sApiAutoscalingV2beta1ResourceMetricSource;
  type: string;
}
export interface IoK8sApiAutoscalingV2beta1MetricStatus {
  containerResource?: IoK8sApiAutoscalingV2beta1ContainerResourceMetricStatus;
  external?: IoK8sApiAutoscalingV2beta1ExternalMetricStatus;
  object?: IoK8sApiAutoscalingV2beta1ObjectMetricStatus;
  pods?: IoK8sApiAutoscalingV2beta1PodsMetricStatus;
  resource?: IoK8sApiAutoscalingV2beta1ResourceMetricStatus;
  type: string;
}
export interface IoK8sApiAutoscalingV2beta1ObjectMetricSource {
  averageValue?: IoK8sApimachineryPkgApiResourceQuantity;
  metricName: string;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  target: IoK8sApiAutoscalingV2beta1CrossVersionObjectReference;
  targetValue: IoK8sApimachineryPkgApiResourceQuantity;
}
export interface IoK8sApiAutoscalingV2beta1ObjectMetricStatus {
  averageValue?: IoK8sApimachineryPkgApiResourceQuantity;
  currentValue: IoK8sApimachineryPkgApiResourceQuantity;
  metricName: string;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  target: IoK8sApiAutoscalingV2beta1CrossVersionObjectReference;
}
export interface IoK8sApiAutoscalingV2beta1PodsMetricSource {
  metricName: string;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  targetAverageValue: IoK8sApimachineryPkgApiResourceQuantity;
}
export interface IoK8sApiAutoscalingV2beta1PodsMetricStatus {
  currentAverageValue: IoK8sApimachineryPkgApiResourceQuantity;
  metricName: string;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
}
export interface IoK8sApiAutoscalingV2beta1ResourceMetricSource {
  name: string;
  targetAverageUtilization?: number;
  targetAverageValue?: IoK8sApimachineryPkgApiResourceQuantity;
}
export interface IoK8sApiAutoscalingV2beta1ResourceMetricStatus {
  currentAverageUtilization?: number;
  currentAverageValue: IoK8sApimachineryPkgApiResourceQuantity;
  name: string;
}
export interface IoK8sApiAutoscalingV2beta2ContainerResourceMetricSource {
  container: string;
  name: string;
  target: IoK8sApiAutoscalingV2beta2MetricTarget;
}
export interface IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus {
  container: string;
  current: IoK8sApiAutoscalingV2beta2MetricValueStatus;
  name: string;
}
export interface IoK8sApiAutoscalingV2beta2CrossVersionObjectReference {
  apiVersion?: string;
  kind: string;
  name: string;
}
export interface IoK8sApiAutoscalingV2beta2ExternalMetricSource {
  metric: IoK8sApiAutoscalingV2beta2MetricIdentifier;
  target: IoK8sApiAutoscalingV2beta2MetricTarget;
}
export interface IoK8sApiAutoscalingV2beta2ExternalMetricStatus {
  current: IoK8sApiAutoscalingV2beta2MetricValueStatus;
  metric: IoK8sApiAutoscalingV2beta2MetricIdentifier;
}
export interface IoK8sApiAutoscalingV2beta2HPAScalingPolicy {
  periodSeconds: number;
  type: string;
  value: number;
}
export interface IoK8sApiAutoscalingV2beta2HPAScalingRules {
  policies?: IoK8sApiAutoscalingV2beta2HPAScalingPolicy[];
  selectPolicy?: string;
  stabilizationWindowSeconds?: number;
}
export interface IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec;
  status?: IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus;
}
export interface IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior {
  scaleDown?: IoK8sApiAutoscalingV2beta2HPAScalingRules;
  scaleUp?: IoK8sApiAutoscalingV2beta2HPAScalingRules;
}
export interface IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList {
  apiVersion?: string;
  items: IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec {
  behavior?: IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior;
  maxReplicas: number;
  metrics?: IoK8sApiAutoscalingV2beta2MetricSpec[];
  minReplicas?: number;
  scaleTargetRef: IoK8sApiAutoscalingV2beta2CrossVersionObjectReference;
}
export interface IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus {
  conditions: IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerCondition[];
  currentMetrics?: IoK8sApiAutoscalingV2beta2MetricStatus[];
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: IoK8sApimachineryPkgApisMetaV1Time;
  observedGeneration?: number;
}
export interface IoK8sApiAutoscalingV2beta2MetricIdentifier {
  name: string;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
}
export interface IoK8sApiAutoscalingV2beta2MetricSpec {
  containerResource?: IoK8sApiAutoscalingV2beta2ContainerResourceMetricSource;
  external?: IoK8sApiAutoscalingV2beta2ExternalMetricSource;
  object?: IoK8sApiAutoscalingV2beta2ObjectMetricSource;
  pods?: IoK8sApiAutoscalingV2beta2PodsMetricSource;
  resource?: IoK8sApiAutoscalingV2beta2ResourceMetricSource;
  type: string;
}
export interface IoK8sApiAutoscalingV2beta2MetricStatus {
  containerResource?: IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus;
  external?: IoK8sApiAutoscalingV2beta2ExternalMetricStatus;
  object?: IoK8sApiAutoscalingV2beta2ObjectMetricStatus;
  pods?: IoK8sApiAutoscalingV2beta2PodsMetricStatus;
  resource?: IoK8sApiAutoscalingV2beta2ResourceMetricStatus;
  type: string;
}
export interface IoK8sApiAutoscalingV2beta2MetricTarget {
  averageUtilization?: number;
  averageValue?: IoK8sApimachineryPkgApiResourceQuantity;
  type: string;
  value?: IoK8sApimachineryPkgApiResourceQuantity;
}
export interface IoK8sApiAutoscalingV2beta2MetricValueStatus {
  averageUtilization?: number;
  averageValue?: IoK8sApimachineryPkgApiResourceQuantity;
  value?: IoK8sApimachineryPkgApiResourceQuantity;
}
export interface IoK8sApiAutoscalingV2beta2ObjectMetricSource {
  describedObject: IoK8sApiAutoscalingV2beta2CrossVersionObjectReference;
  metric: IoK8sApiAutoscalingV2beta2MetricIdentifier;
  target: IoK8sApiAutoscalingV2beta2MetricTarget;
}
export interface IoK8sApiAutoscalingV2beta2ObjectMetricStatus {
  current: IoK8sApiAutoscalingV2beta2MetricValueStatus;
  describedObject: IoK8sApiAutoscalingV2beta2CrossVersionObjectReference;
  metric: IoK8sApiAutoscalingV2beta2MetricIdentifier;
}
export interface IoK8sApiAutoscalingV2beta2PodsMetricSource {
  metric: IoK8sApiAutoscalingV2beta2MetricIdentifier;
  target: IoK8sApiAutoscalingV2beta2MetricTarget;
}
export interface IoK8sApiAutoscalingV2beta2PodsMetricStatus {
  current: IoK8sApiAutoscalingV2beta2MetricValueStatus;
  metric: IoK8sApiAutoscalingV2beta2MetricIdentifier;
}
export interface IoK8sApiAutoscalingV2beta2ResourceMetricSource {
  name: string;
  target: IoK8sApiAutoscalingV2beta2MetricTarget;
}
export interface IoK8sApiAutoscalingV2beta2ResourceMetricStatus {
  current: IoK8sApiAutoscalingV2beta2MetricValueStatus;
  name: string;
}
export interface IoK8sApiBatchV1CronJob {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiBatchV1CronJobSpec;
  status?: IoK8sApiBatchV1CronJobStatus;
}
export interface IoK8sApiBatchV1CronJobList {
  apiVersion?: string;
  items: IoK8sApiBatchV1CronJob[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiBatchV1CronJobSpec {
  concurrencyPolicy?: string;
  failedJobsHistoryLimit?: number;
  jobTemplate: IoK8sApiBatchV1JobTemplateSpec;
  schedule: string;
  startingDeadlineSeconds?: number;
  successfulJobsHistoryLimit?: number;
  suspend?: boolean;
}
export interface IoK8sApiBatchV1CronJobStatus {
  active?: IoK8sApiCoreV1ObjectReference[];
  lastScheduleTime?: IoK8sApimachineryPkgApisMetaV1Time;
  lastSuccessfulTime?: IoK8sApimachineryPkgApisMetaV1Time;
}
export interface IoK8sApiBatchV1Job {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiBatchV1JobSpec;
  status?: IoK8sApiBatchV1JobStatus;
}
export interface IoK8sApiBatchV1JobCondition {
  lastProbeTime?: IoK8sApimachineryPkgApisMetaV1Time;
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiBatchV1JobList {
  apiVersion?: string;
  items: IoK8sApiBatchV1Job[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiBatchV1JobSpec {
  activeDeadlineSeconds?: number;
  backoffLimit?: number;
  completionMode?: string;
  completions?: number;
  manualSelector?: boolean;
  parallelism?: number;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  suspend?: boolean;
  template: IoK8sApiCoreV1PodTemplateSpec;
  ttlSecondsAfterFinished?: number;
}
export interface IoK8sApiBatchV1JobStatus {
  active?: number;
  completedIndexes?: string;
  completionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  conditions?: IoK8sApiBatchV1JobCondition[];
  failed?: number;
  startTime?: IoK8sApimachineryPkgApisMetaV1Time;
  succeeded?: number;
  uncountedTerminatedPods?: IoK8sApiBatchV1UncountedTerminatedPods;
}
export interface IoK8sApiBatchV1JobTemplateSpec {
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiBatchV1JobSpec;
}
export interface IoK8sApiBatchV1UncountedTerminatedPods {
  failed?: string[];
  succeeded?: string[];
}
export interface IoK8sApiBatchV1beta1CronJob {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiBatchV1beta1CronJobSpec;
  status?: IoK8sApiBatchV1beta1CronJobStatus;
}
export interface IoK8sApiBatchV1beta1CronJobList {
  apiVersion?: string;
  items: IoK8sApiBatchV1beta1CronJob[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiBatchV1beta1CronJobSpec {
  concurrencyPolicy?: string;
  failedJobsHistoryLimit?: number;
  jobTemplate: IoK8sApiBatchV1beta1JobTemplateSpec;
  schedule: string;
  startingDeadlineSeconds?: number;
  successfulJobsHistoryLimit?: number;
  suspend?: boolean;
}
export interface IoK8sApiBatchV1beta1CronJobStatus {
  active?: IoK8sApiCoreV1ObjectReference[];
  lastScheduleTime?: IoK8sApimachineryPkgApisMetaV1Time;
  lastSuccessfulTime?: IoK8sApimachineryPkgApisMetaV1Time;
}
export interface IoK8sApiBatchV1beta1JobTemplateSpec {
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiBatchV1JobSpec;
}
export interface IoK8sApiCertificatesV1CertificateSigningRequest {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiCertificatesV1CertificateSigningRequestSpec;
  status?: IoK8sApiCertificatesV1CertificateSigningRequestStatus;
}
export interface IoK8sApiCertificatesV1CertificateSigningRequestCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  lastUpdateTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiCertificatesV1CertificateSigningRequestList {
  apiVersion?: string;
  items: IoK8sApiCertificatesV1CertificateSigningRequest[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCertificatesV1CertificateSigningRequestSpec {
  expirationSeconds?: number;
  extra?: {
    [key: string]: unknown;
  };
  groups?: string[];
  request: string;
  signerName: string;
  uid?: string;
  usages?: string[];
  username?: string;
}
export interface IoK8sApiCertificatesV1CertificateSigningRequestStatus {
  certificate?: string;
  conditions?: IoK8sApiCertificatesV1CertificateSigningRequestCondition[];
}
export interface IoK8sApiCoordinationV1Lease {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoordinationV1LeaseSpec;
}
export interface IoK8sApiCoordinationV1LeaseList {
  apiVersion?: string;
  items: IoK8sApiCoordinationV1Lease[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoordinationV1LeaseSpec {
  acquireTime?: IoK8sApimachineryPkgApisMetaV1MicroTime;
  holderIdentity?: string;
  leaseDurationSeconds?: number;
  leaseTransitions?: number;
  renewTime?: IoK8sApimachineryPkgApisMetaV1MicroTime;
}
export interface IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource {
  fsType?: string;
  partition?: number;
  readOnly?: boolean;
  volumeID: string;
}
export interface IoK8sApiCoreV1Affinity {
  nodeAffinity?: IoK8sApiCoreV1NodeAffinity;
  podAffinity?: IoK8sApiCoreV1PodAffinity;
  podAntiAffinity?: IoK8sApiCoreV1PodAntiAffinity;
}
export interface IoK8sApiCoreV1AttachedVolume {
  devicePath: string;
  name: string;
}
export interface IoK8sApiCoreV1AzureDiskVolumeSource {
  cachingMode?: string;
  diskName: string;
  diskURI: string;
  fsType?: string;
  kind?: string;
  readOnly?: boolean;
}
export interface IoK8sApiCoreV1AzureFilePersistentVolumeSource {
  readOnly?: boolean;
  secretName: string;
  secretNamespace?: string;
  shareName: string;
}
export interface IoK8sApiCoreV1AzureFileVolumeSource {
  readOnly?: boolean;
  secretName: string;
  shareName: string;
}
export interface IoK8sApiCoreV1Binding {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  target: IoK8sApiCoreV1ObjectReference;
}
export interface IoK8sApiCoreV1CSIPersistentVolumeSource {
  controllerExpandSecretRef?: IoK8sApiCoreV1SecretReference;
  controllerPublishSecretRef?: IoK8sApiCoreV1SecretReference;
  driver: string;
  fsType?: string;
  nodePublishSecretRef?: IoK8sApiCoreV1SecretReference;
  nodeStageSecretRef?: IoK8sApiCoreV1SecretReference;
  readOnly?: boolean;
  volumeAttributes?: {
    [key: string]: unknown;
  };
  volumeHandle: string;
}
export interface IoK8sApiCoreV1CSIVolumeSource {
  driver: string;
  fsType?: string;
  nodePublishSecretRef?: IoK8sApiCoreV1LocalObjectReference;
  readOnly?: boolean;
  volumeAttributes?: {
    [key: string]: unknown;
  };
}
export interface IoK8sApiCoreV1Capabilities {
  add?: string[];
  drop?: string[];
}
export interface IoK8sApiCoreV1CephFSPersistentVolumeSource {
  monitors: string[];
  path?: string;
  readOnly?: boolean;
  secretFile?: string;
  secretRef?: IoK8sApiCoreV1SecretReference;
  user?: string;
}
export interface IoK8sApiCoreV1CephFSVolumeSource {
  monitors: string[];
  path?: string;
  readOnly?: boolean;
  secretFile?: string;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  user?: string;
}
export interface IoK8sApiCoreV1CinderPersistentVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1SecretReference;
  volumeID: string;
}
export interface IoK8sApiCoreV1CinderVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  volumeID: string;
}
export interface IoK8sApiCoreV1ClientIPConfig {
  timeoutSeconds?: number;
}
export interface IoK8sApiCoreV1ComponentCondition {
  error?: string;
  message?: string;
  status: string;
  type: string;
}
export interface IoK8sApiCoreV1ComponentStatus {
  apiVersion?: string;
  conditions?: IoK8sApiCoreV1ComponentCondition[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
}
export interface IoK8sApiCoreV1ComponentStatusList {
  apiVersion?: string;
  items: IoK8sApiCoreV1ComponentStatus[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1ConfigMap {
  apiVersion?: string;
  binaryData?: {
    [key: string]: unknown;
  };
  data?: {
    [key: string]: unknown;
  };
  immutable?: boolean;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
}
export interface IoK8sApiCoreV1ConfigMapEnvSource {
  name?: string;
  optional?: boolean;
}
export interface IoK8sApiCoreV1ConfigMapKeySelector {
  key: string;
  name?: string;
  optional?: boolean;
}
export interface IoK8sApiCoreV1ConfigMapList {
  apiVersion?: string;
  items: IoK8sApiCoreV1ConfigMap[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1ConfigMapNodeConfigSource {
  kubeletConfigKey: string;
  name: string;
  namespace: string;
  resourceVersion?: string;
  uid?: string;
}
export interface IoK8sApiCoreV1ConfigMapProjection {
  items?: IoK8sApiCoreV1KeyToPath[];
  name?: string;
  optional?: boolean;
}
export interface IoK8sApiCoreV1ConfigMapVolumeSource {
  defaultMode?: number;
  items?: IoK8sApiCoreV1KeyToPath[];
  name?: string;
  optional?: boolean;
}
export interface IoK8sApiCoreV1Container {
  args?: string[];
  command?: string[];
  env?: IoK8sApiCoreV1EnvVar[];
  envFrom?: IoK8sApiCoreV1EnvFromSource[];
  image?: string;
  imagePullPolicy?: string;
  lifecycle?: IoK8sApiCoreV1Lifecycle;
  livenessProbe?: IoK8sApiCoreV1Probe;
  name: string;
  ports?: IoK8sApiCoreV1ContainerPort[];
  readinessProbe?: IoK8sApiCoreV1Probe;
  resources?: IoK8sApiCoreV1ResourceRequirements;
  securityContext?: IoK8sApiCoreV1SecurityContext;
  startupProbe?: IoK8sApiCoreV1Probe;
  stdin?: boolean;
  stdinOnce?: boolean;
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  tty?: boolean;
  volumeDevices?: IoK8sApiCoreV1VolumeDevice[];
  volumeMounts?: IoK8sApiCoreV1VolumeMount[];
  workingDir?: string;
}
export interface IoK8sApiCoreV1ContainerImage {
  names?: string[];
  sizeBytes?: number;
}
export interface IoK8sApiCoreV1ContainerPort {
  containerPort: number;
  hostIP?: string;
  hostPort?: number;
  name?: string;
  protocol?: string;
}
export interface IoK8sApiCoreV1ContainerState {
  running?: IoK8sApiCoreV1ContainerStateRunning;
  terminated?: IoK8sApiCoreV1ContainerStateTerminated;
  waiting?: IoK8sApiCoreV1ContainerStateWaiting;
}
export interface IoK8sApiCoreV1ContainerStateRunning {
  startedAt?: IoK8sApimachineryPkgApisMetaV1Time;
}
export interface IoK8sApiCoreV1ContainerStateTerminated {
  containerID?: string;
  exitCode: number;
  finishedAt?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  signal?: number;
  startedAt?: IoK8sApimachineryPkgApisMetaV1Time;
}
export interface IoK8sApiCoreV1ContainerStateWaiting {
  message?: string;
  reason?: string;
}
export interface IoK8sApiCoreV1ContainerStatus {
  containerID?: string;
  image: string;
  imageID: string;
  lastState?: IoK8sApiCoreV1ContainerState;
  name: string;
  ready: boolean;
  restartCount: number;
  started?: boolean;
  state?: IoK8sApiCoreV1ContainerState;
}
export interface IoK8sApiCoreV1DaemonEndpoint {
  Port: number;
}
export interface IoK8sApiCoreV1DownwardAPIProjection {
  items?: IoK8sApiCoreV1DownwardAPIVolumeFile[];
}
export interface IoK8sApiCoreV1DownwardAPIVolumeFile {
  fieldRef?: IoK8sApiCoreV1ObjectFieldSelector;
  mode?: number;
  path: string;
  resourceFieldRef?: IoK8sApiCoreV1ResourceFieldSelector;
}
export interface IoK8sApiCoreV1DownwardAPIVolumeSource {
  defaultMode?: number;
  items?: IoK8sApiCoreV1DownwardAPIVolumeFile[];
}
export interface IoK8sApiCoreV1EmptyDirVolumeSource {
  medium?: string;
  sizeLimit?: IoK8sApimachineryPkgApiResourceQuantity;
}
export interface IoK8sApiCoreV1EndpointAddress {
  hostname?: string;
  ip: string;
  nodeName?: string;
  targetRef?: IoK8sApiCoreV1ObjectReference;
}
export interface IoK8sApiCoreV1EndpointPort {
  appProtocol?: string;
  name?: string;
  port: number;
  protocol?: string;
}
export interface IoK8sApiCoreV1EndpointSubset {
  addresses?: IoK8sApiCoreV1EndpointAddress[];
  notReadyAddresses?: IoK8sApiCoreV1EndpointAddress[];
  ports?: IoK8sApiCoreV1EndpointPort[];
}
export interface IoK8sApiCoreV1Endpoints {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  subsets?: IoK8sApiCoreV1EndpointSubset[];
}
export interface IoK8sApiCoreV1EndpointsList {
  apiVersion?: string;
  items: IoK8sApiCoreV1Endpoints[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1EnvFromSource {
  configMapRef?: IoK8sApiCoreV1ConfigMapEnvSource;
  prefix?: string;
  secretRef?: IoK8sApiCoreV1SecretEnvSource;
}
export interface IoK8sApiCoreV1EnvVar {
  name: string;
  value?: string;
  valueFrom?: IoK8sApiCoreV1EnvVarSource;
}
export interface IoK8sApiCoreV1EnvVarSource {
  configMapKeyRef?: IoK8sApiCoreV1ConfigMapKeySelector;
  fieldRef?: IoK8sApiCoreV1ObjectFieldSelector;
  resourceFieldRef?: IoK8sApiCoreV1ResourceFieldSelector;
  secretKeyRef?: IoK8sApiCoreV1SecretKeySelector;
}
export interface IoK8sApiCoreV1EphemeralContainer {
  args?: string[];
  command?: string[];
  env?: IoK8sApiCoreV1EnvVar[];
  envFrom?: IoK8sApiCoreV1EnvFromSource[];
  image?: string;
  imagePullPolicy?: string;
  lifecycle?: IoK8sApiCoreV1Lifecycle;
  livenessProbe?: IoK8sApiCoreV1Probe;
  name: string;
  ports?: IoK8sApiCoreV1ContainerPort[];
  readinessProbe?: IoK8sApiCoreV1Probe;
  resources?: IoK8sApiCoreV1ResourceRequirements;
  securityContext?: IoK8sApiCoreV1SecurityContext;
  startupProbe?: IoK8sApiCoreV1Probe;
  stdin?: boolean;
  stdinOnce?: boolean;
  targetContainerName?: string;
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  tty?: boolean;
  volumeDevices?: IoK8sApiCoreV1VolumeDevice[];
  volumeMounts?: IoK8sApiCoreV1VolumeMount[];
  workingDir?: string;
}
export interface IoK8sApiCoreV1EphemeralVolumeSource {
  volumeClaimTemplate?: IoK8sApiCoreV1PersistentVolumeClaimTemplate;
}
export interface IoK8sApiCoreV1Event {
  action?: string;
  apiVersion?: string;
  count?: number;
  eventTime?: IoK8sApimachineryPkgApisMetaV1MicroTime;
  firstTimestamp?: IoK8sApimachineryPkgApisMetaV1Time;
  involvedObject: IoK8sApiCoreV1ObjectReference;
  kind?: string;
  lastTimestamp?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  metadata: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  reason?: string;
  related?: IoK8sApiCoreV1ObjectReference;
  reportingComponent?: string;
  reportingInstance?: string;
  series?: IoK8sApiCoreV1EventSeries;
  source?: IoK8sApiCoreV1EventSource;
  type?: string;
}
export interface IoK8sApiCoreV1EventList {
  apiVersion?: string;
  items: IoK8sApiCoreV1Event[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1EventSeries {
  count?: number;
  lastObservedTime?: IoK8sApimachineryPkgApisMetaV1MicroTime;
}
export interface IoK8sApiCoreV1EventSource {
  component?: string;
  host?: string;
}
export interface IoK8sApiCoreV1ExecAction {
  command?: string[];
}
export interface IoK8sApiCoreV1FCVolumeSource {
  fsType?: string;
  lun?: number;
  readOnly?: boolean;
  targetWWNs?: string[];
  wwids?: string[];
}
export interface IoK8sApiCoreV1FlexPersistentVolumeSource {
  driver: string;
  fsType?: string;
  options?: {
    [key: string]: unknown;
  };
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1SecretReference;
}
export interface IoK8sApiCoreV1FlexVolumeSource {
  driver: string;
  fsType?: string;
  options?: {
    [key: string]: unknown;
  };
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
}
export interface IoK8sApiCoreV1FlockerVolumeSource {
  datasetName?: string;
  datasetUUID?: string;
}
export interface IoK8sApiCoreV1GCEPersistentDiskVolumeSource {
  fsType?: string;
  partition?: number;
  pdName: string;
  readOnly?: boolean;
}
export interface IoK8sApiCoreV1GitRepoVolumeSource {
  directory?: string;
  repository: string;
  revision?: string;
}
export interface IoK8sApiCoreV1GlusterfsPersistentVolumeSource {
  endpoints: string;
  endpointsNamespace?: string;
  path: string;
  readOnly?: boolean;
}
export interface IoK8sApiCoreV1GlusterfsVolumeSource {
  endpoints: string;
  path: string;
  readOnly?: boolean;
}
export interface IoK8sApiCoreV1HTTPGetAction {
  host?: string;
  httpHeaders?: IoK8sApiCoreV1HTTPHeader[];
  path?: string;
  port: IoK8sApimachineryPkgUtilIntstrIntOrString;
  scheme?: string;
}
export interface IoK8sApiCoreV1HTTPHeader {
  name: string;
  value: string;
}
export interface IoK8sApiCoreV1Handler {
  exec?: IoK8sApiCoreV1ExecAction;
  httpGet?: IoK8sApiCoreV1HTTPGetAction;
  tcpSocket?: IoK8sApiCoreV1TCPSocketAction;
}
export interface IoK8sApiCoreV1HostAlias {
  hostnames?: string[];
  ip?: string;
}
export interface IoK8sApiCoreV1HostPathVolumeSource {
  path: string;
  type?: string;
}
export interface IoK8sApiCoreV1ISCSIPersistentVolumeSource {
  chapAuthDiscovery?: boolean;
  chapAuthSession?: boolean;
  fsType?: string;
  initiatorName?: string;
  iqn: string;
  iscsiInterface?: string;
  lun: number;
  portals?: string[];
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1SecretReference;
  targetPortal: string;
}
export interface IoK8sApiCoreV1ISCSIVolumeSource {
  chapAuthDiscovery?: boolean;
  chapAuthSession?: boolean;
  fsType?: string;
  initiatorName?: string;
  iqn: string;
  iscsiInterface?: string;
  lun: number;
  portals?: string[];
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  targetPortal: string;
}
export interface IoK8sApiCoreV1KeyToPath {
  key: string;
  mode?: number;
  path: string;
}
export interface IoK8sApiCoreV1Lifecycle {
  postStart?: IoK8sApiCoreV1Handler;
  preStop?: IoK8sApiCoreV1Handler;
}
export interface IoK8sApiCoreV1LimitRange {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1LimitRangeSpec;
}
export interface IoK8sApiCoreV1LimitRangeItem {
  default?: {
    [key: string]: unknown;
  };
  defaultRequest?: {
    [key: string]: unknown;
  };
  max?: {
    [key: string]: unknown;
  };
  maxLimitRequestRatio?: {
    [key: string]: unknown;
  };
  min?: {
    [key: string]: unknown;
  };
  type: string;
}
export interface IoK8sApiCoreV1LimitRangeList {
  apiVersion?: string;
  items: IoK8sApiCoreV1LimitRange[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1LimitRangeSpec {
  limits: IoK8sApiCoreV1LimitRangeItem[];
}
export interface IoK8sApiCoreV1LoadBalancerIngress {
  hostname?: string;
  ip?: string;
  ports?: IoK8sApiCoreV1PortStatus[];
}
export interface IoK8sApiCoreV1LoadBalancerStatus {
  ingress?: IoK8sApiCoreV1LoadBalancerIngress[];
}
export interface IoK8sApiCoreV1LocalObjectReference {
  name?: string;
}
export interface IoK8sApiCoreV1LocalVolumeSource {
  fsType?: string;
  path: string;
}
export interface IoK8sApiCoreV1NFSVolumeSource {
  path: string;
  readOnly?: boolean;
  server: string;
}
export interface IoK8sApiCoreV1Namespace {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1NamespaceSpec;
  status?: IoK8sApiCoreV1NamespaceStatus;
}
export interface IoK8sApiCoreV1NamespaceCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiCoreV1NamespaceList {
  apiVersion?: string;
  items: IoK8sApiCoreV1Namespace[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1NamespaceSpec {
  finalizers?: string[];
}
export interface IoK8sApiCoreV1NamespaceStatus {
  conditions?: IoK8sApiCoreV1NamespaceCondition[];
  phase?: string;
}
export interface IoK8sApiCoreV1Node {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1NodeSpec;
  status?: IoK8sApiCoreV1NodeStatus;
}
export interface IoK8sApiCoreV1NodeAddress {
  address: string;
  type: string;
}
export interface IoK8sApiCoreV1NodeAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: IoK8sApiCoreV1PreferredSchedulingTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: IoK8sApiCoreV1NodeSelector;
}
export interface IoK8sApiCoreV1NodeCondition {
  lastHeartbeatTime?: IoK8sApimachineryPkgApisMetaV1Time;
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiCoreV1NodeConfigSource {
  configMap?: IoK8sApiCoreV1ConfigMapNodeConfigSource;
}
export interface IoK8sApiCoreV1NodeConfigStatus {
  active?: IoK8sApiCoreV1NodeConfigSource;
  assigned?: IoK8sApiCoreV1NodeConfigSource;
  error?: string;
  lastKnownGood?: IoK8sApiCoreV1NodeConfigSource;
}
export interface IoK8sApiCoreV1NodeDaemonEndpoints {
  kubeletEndpoint?: IoK8sApiCoreV1DaemonEndpoint;
}
export interface IoK8sApiCoreV1NodeList {
  apiVersion?: string;
  items: IoK8sApiCoreV1Node[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1NodeSelector {
  nodeSelectorTerms: IoK8sApiCoreV1NodeSelectorTerm[];
}
export interface IoK8sApiCoreV1NodeSelectorRequirement {
  key: string;
  operator: string;
  values?: string[];
}
export interface IoK8sApiCoreV1NodeSelectorTerm {
  matchExpressions?: IoK8sApiCoreV1NodeSelectorRequirement[];
  matchFields?: IoK8sApiCoreV1NodeSelectorRequirement[];
}
export interface IoK8sApiCoreV1NodeSpec {
  configSource?: IoK8sApiCoreV1NodeConfigSource;
  externalID?: string;
  podCIDR?: string;
  podCIDRs?: string[];
  providerID?: string;
  taints?: IoK8sApiCoreV1Taint[];
  unschedulable?: boolean;
}
export interface IoK8sApiCoreV1NodeStatus {
  addresses?: IoK8sApiCoreV1NodeAddress[];
  allocatable?: {
    [key: string]: unknown;
  };
  capacity?: {
    [key: string]: unknown;
  };
  conditions?: IoK8sApiCoreV1NodeCondition[];
  config?: IoK8sApiCoreV1NodeConfigStatus;
  daemonEndpoints?: IoK8sApiCoreV1NodeDaemonEndpoints;
  images?: IoK8sApiCoreV1ContainerImage[];
  nodeInfo?: IoK8sApiCoreV1NodeSystemInfo;
  phase?: string;
  volumesAttached?: IoK8sApiCoreV1AttachedVolume[];
  volumesInUse?: string[];
}
export interface IoK8sApiCoreV1NodeSystemInfo {
  architecture: string;
  bootID: string;
  containerRuntimeVersion: string;
  kernelVersion: string;
  kubeProxyVersion: string;
  kubeletVersion: string;
  machineID: string;
  operatingSystem: string;
  osImage: string;
  systemUUID: string;
}
export interface IoK8sApiCoreV1ObjectFieldSelector {
  apiVersion?: string;
  fieldPath: string;
}
export interface IoK8sApiCoreV1ObjectReference {
  apiVersion?: string;
  fieldPath?: string;
  kind?: string;
  name?: string;
  namespace?: string;
  resourceVersion?: string;
  uid?: string;
}
export interface IoK8sApiCoreV1PersistentVolume {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1PersistentVolumeSpec;
  status?: IoK8sApiCoreV1PersistentVolumeStatus;
}
export interface IoK8sApiCoreV1PersistentVolumeClaim {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1PersistentVolumeClaimSpec;
  status?: IoK8sApiCoreV1PersistentVolumeClaimStatus;
}
export interface IoK8sApiCoreV1PersistentVolumeClaimCondition {
  lastProbeTime?: IoK8sApimachineryPkgApisMetaV1Time;
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiCoreV1PersistentVolumeClaimList {
  apiVersion?: string;
  items: IoK8sApiCoreV1PersistentVolumeClaim[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1PersistentVolumeClaimSpec {
  accessModes?: string[];
  dataSource?: IoK8sApiCoreV1TypedLocalObjectReference;
  dataSourceRef?: IoK8sApiCoreV1TypedLocalObjectReference;
  resources?: IoK8sApiCoreV1ResourceRequirements;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  storageClassName?: string;
  volumeMode?: string;
  volumeName?: string;
}
export interface IoK8sApiCoreV1PersistentVolumeClaimStatus {
  accessModes?: string[];
  capacity?: {
    [key: string]: unknown;
  };
  conditions?: IoK8sApiCoreV1PersistentVolumeClaimCondition[];
  phase?: string;
}
export interface IoK8sApiCoreV1PersistentVolumeClaimTemplate {
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiCoreV1PersistentVolumeClaimSpec;
}
export interface IoK8sApiCoreV1PersistentVolumeClaimVolumeSource {
  claimName: string;
  readOnly?: boolean;
}
export interface IoK8sApiCoreV1PersistentVolumeList {
  apiVersion?: string;
  items: IoK8sApiCoreV1PersistentVolume[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1PersistentVolumeSpec {
  accessModes?: string[];
  awsElasticBlockStore?: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
  azureDisk?: IoK8sApiCoreV1AzureDiskVolumeSource;
  azureFile?: IoK8sApiCoreV1AzureFilePersistentVolumeSource;
  capacity?: {
    [key: string]: unknown;
  };
  cephfs?: IoK8sApiCoreV1CephFSPersistentVolumeSource;
  cinder?: IoK8sApiCoreV1CinderPersistentVolumeSource;
  claimRef?: IoK8sApiCoreV1ObjectReference;
  csi?: IoK8sApiCoreV1CSIPersistentVolumeSource;
  fc?: IoK8sApiCoreV1FCVolumeSource;
  flexVolume?: IoK8sApiCoreV1FlexPersistentVolumeSource;
  flocker?: IoK8sApiCoreV1FlockerVolumeSource;
  gcePersistentDisk?: IoK8sApiCoreV1GCEPersistentDiskVolumeSource;
  glusterfs?: IoK8sApiCoreV1GlusterfsPersistentVolumeSource;
  hostPath?: IoK8sApiCoreV1HostPathVolumeSource;
  iscsi?: IoK8sApiCoreV1ISCSIPersistentVolumeSource;
  local?: IoK8sApiCoreV1LocalVolumeSource;
  mountOptions?: string[];
  nfs?: IoK8sApiCoreV1NFSVolumeSource;
  nodeAffinity?: IoK8sApiCoreV1VolumeNodeAffinity;
  persistentVolumeReclaimPolicy?: string;
  photonPersistentDisk?: IoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
  portworxVolume?: IoK8sApiCoreV1PortworxVolumeSource;
  quobyte?: IoK8sApiCoreV1QuobyteVolumeSource;
  rbd?: IoK8sApiCoreV1RBDPersistentVolumeSource;
  scaleIO?: IoK8sApiCoreV1ScaleIOPersistentVolumeSource;
  storageClassName?: string;
  storageos?: IoK8sApiCoreV1StorageOSPersistentVolumeSource;
  volumeMode?: string;
  vsphereVolume?: IoK8sApiCoreV1VsphereVirtualDiskVolumeSource;
}
export interface IoK8sApiCoreV1PersistentVolumeStatus {
  message?: string;
  phase?: string;
  reason?: string;
}
export interface IoK8sApiCoreV1PhotonPersistentDiskVolumeSource {
  fsType?: string;
  pdID: string;
}
export interface IoK8sApiCoreV1Pod {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1PodSpec;
  status?: IoK8sApiCoreV1PodStatus;
}
export interface IoK8sApiCoreV1PodAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: IoK8sApiCoreV1WeightedPodAffinityTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: IoK8sApiCoreV1PodAffinityTerm[];
}
export interface IoK8sApiCoreV1PodAffinityTerm {
  labelSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  namespaces?: string[];
  topologyKey: string;
}
export interface IoK8sApiCoreV1PodAntiAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: IoK8sApiCoreV1WeightedPodAffinityTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: IoK8sApiCoreV1PodAffinityTerm[];
}
export interface IoK8sApiCoreV1PodCondition {
  lastProbeTime?: IoK8sApimachineryPkgApisMetaV1Time;
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiCoreV1PodDNSConfig {
  nameservers?: string[];
  options?: IoK8sApiCoreV1PodDNSConfigOption[];
  searches?: string[];
}
export interface IoK8sApiCoreV1PodDNSConfigOption {
  name?: string;
  value?: string;
}
export interface IoK8sApiCoreV1PodIP {
  ip?: string;
}
export interface IoK8sApiCoreV1PodList {
  apiVersion?: string;
  items: IoK8sApiCoreV1Pod[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1PodReadinessGate {
  conditionType: string;
}
export interface IoK8sApiCoreV1PodSecurityContext {
  fsGroup?: number;
  fsGroupChangePolicy?: string;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  runAsUser?: number;
  seLinuxOptions?: IoK8sApiCoreV1SELinuxOptions;
  seccompProfile?: IoK8sApiCoreV1SeccompProfile;
  supplementalGroups?: number[];
  sysctls?: IoK8sApiCoreV1Sysctl[];
  windowsOptions?: IoK8sApiCoreV1WindowsSecurityContextOptions;
}
export interface IoK8sApiCoreV1PodSpec {
  activeDeadlineSeconds?: number;
  affinity?: IoK8sApiCoreV1Affinity;
  automountServiceAccountToken?: boolean;
  containers: IoK8sApiCoreV1Container[];
  dnsConfig?: IoK8sApiCoreV1PodDNSConfig;
  dnsPolicy?: string;
  enableServiceLinks?: boolean;
  ephemeralContainers?: IoK8sApiCoreV1EphemeralContainer[];
  hostAliases?: IoK8sApiCoreV1HostAlias[];
  hostIPC?: boolean;
  hostNetwork?: boolean;
  hostPID?: boolean;
  hostname?: string;
  imagePullSecrets?: IoK8sApiCoreV1LocalObjectReference[];
  initContainers?: IoK8sApiCoreV1Container[];
  nodeName?: string;
  nodeSelector?: {
    [key: string]: unknown;
  };
  overhead?: {
    [key: string]: unknown;
  };
  preemptionPolicy?: string;
  priority?: number;
  priorityClassName?: string;
  readinessGates?: IoK8sApiCoreV1PodReadinessGate[];
  restartPolicy?: string;
  runtimeClassName?: string;
  schedulerName?: string;
  securityContext?: IoK8sApiCoreV1PodSecurityContext;
  serviceAccount?: string;
  serviceAccountName?: string;
  setHostnameAsFQDN?: boolean;
  shareProcessNamespace?: boolean;
  subdomain?: string;
  terminationGracePeriodSeconds?: number;
  tolerations?: IoK8sApiCoreV1Toleration[];
  topologySpreadConstraints?: IoK8sApiCoreV1TopologySpreadConstraint[];
  volumes?: IoK8sApiCoreV1Volume[];
}
export interface IoK8sApiCoreV1PodStatus {
  conditions?: IoK8sApiCoreV1PodCondition[];
  containerStatuses?: IoK8sApiCoreV1ContainerStatus[];
  ephemeralContainerStatuses?: IoK8sApiCoreV1ContainerStatus[];
  hostIP?: string;
  initContainerStatuses?: IoK8sApiCoreV1ContainerStatus[];
  message?: string;
  nominatedNodeName?: string;
  phase?: string;
  podIP?: string;
  podIPs?: IoK8sApiCoreV1PodIP[];
  qosClass?: string;
  reason?: string;
  startTime?: IoK8sApimachineryPkgApisMetaV1Time;
}
export interface IoK8sApiCoreV1PodTemplate {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  template?: IoK8sApiCoreV1PodTemplateSpec;
}
export interface IoK8sApiCoreV1PodTemplateList {
  apiVersion?: string;
  items: IoK8sApiCoreV1PodTemplate[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1PodTemplateSpec {
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1PodSpec;
}
export interface IoK8sApiCoreV1PortStatus {
  error?: string;
  port: number;
  protocol: string;
}
export interface IoK8sApiCoreV1PortworxVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  volumeID: string;
}
export interface IoK8sApiCoreV1PreferredSchedulingTerm {
  preference: IoK8sApiCoreV1NodeSelectorTerm;
  weight: number;
}
export interface IoK8sApiCoreV1Probe {
  exec?: IoK8sApiCoreV1ExecAction;
  failureThreshold?: number;
  httpGet?: IoK8sApiCoreV1HTTPGetAction;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: IoK8sApiCoreV1TCPSocketAction;
  terminationGracePeriodSeconds?: number;
  timeoutSeconds?: number;
}
export interface IoK8sApiCoreV1ProjectedVolumeSource {
  defaultMode?: number;
  sources?: IoK8sApiCoreV1VolumeProjection[];
}
export interface IoK8sApiCoreV1QuobyteVolumeSource {
  group?: string;
  readOnly?: boolean;
  registry: string;
  tenant?: string;
  user?: string;
  volume: string;
}
export interface IoK8sApiCoreV1RBDPersistentVolumeSource {
  fsType?: string;
  image: string;
  keyring?: string;
  monitors: string[];
  pool?: string;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1SecretReference;
  user?: string;
}
export interface IoK8sApiCoreV1RBDVolumeSource {
  fsType?: string;
  image: string;
  keyring?: string;
  monitors: string[];
  pool?: string;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  user?: string;
}
export interface IoK8sApiCoreV1ReplicationController {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1ReplicationControllerSpec;
  status?: IoK8sApiCoreV1ReplicationControllerStatus;
}
export interface IoK8sApiCoreV1ReplicationControllerCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiCoreV1ReplicationControllerList {
  apiVersion?: string;
  items: IoK8sApiCoreV1ReplicationController[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1ReplicationControllerSpec {
  minReadySeconds?: number;
  replicas?: number;
  selector?: {
    [key: string]: unknown;
  };
  template?: IoK8sApiCoreV1PodTemplateSpec;
}
export interface IoK8sApiCoreV1ReplicationControllerStatus {
  availableReplicas?: number;
  conditions?: IoK8sApiCoreV1ReplicationControllerCondition[];
  fullyLabeledReplicas?: number;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
}
export interface IoK8sApiCoreV1ResourceFieldSelector {
  containerName?: string;
  divisor?: IoK8sApimachineryPkgApiResourceQuantity;
  resource: string;
}
export interface IoK8sApiCoreV1ResourceQuota {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1ResourceQuotaSpec;
  status?: IoK8sApiCoreV1ResourceQuotaStatus;
}
export interface IoK8sApiCoreV1ResourceQuotaList {
  apiVersion?: string;
  items: IoK8sApiCoreV1ResourceQuota[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1ResourceQuotaSpec {
  hard?: {
    [key: string]: unknown;
  };
  scopeSelector?: IoK8sApiCoreV1ScopeSelector;
  scopes?: string[];
}
export interface IoK8sApiCoreV1ResourceQuotaStatus {
  hard?: {
    [key: string]: unknown;
  };
  used?: {
    [key: string]: unknown;
  };
}
export interface IoK8sApiCoreV1ResourceRequirements {
  limits?: {
    [key: string]: unknown;
  };
  requests?: {
    [key: string]: unknown;
  };
}
export interface IoK8sApiCoreV1SELinuxOptions {
  level?: string;
  role?: string;
  type?: string;
  user?: string;
}
export interface IoK8sApiCoreV1ScaleIOPersistentVolumeSource {
  fsType?: string;
  gateway: string;
  protectionDomain?: string;
  readOnly?: boolean;
  secretRef: IoK8sApiCoreV1SecretReference;
  sslEnabled?: boolean;
  storageMode?: string;
  storagePool?: string;
  system: string;
  volumeName?: string;
}
export interface IoK8sApiCoreV1ScaleIOVolumeSource {
  fsType?: string;
  gateway: string;
  protectionDomain?: string;
  readOnly?: boolean;
  secretRef: IoK8sApiCoreV1LocalObjectReference;
  sslEnabled?: boolean;
  storageMode?: string;
  storagePool?: string;
  system: string;
  volumeName?: string;
}
export interface IoK8sApiCoreV1ScopeSelector {
  matchExpressions?: IoK8sApiCoreV1ScopedResourceSelectorRequirement[];
}
export interface IoK8sApiCoreV1ScopedResourceSelectorRequirement {
  operator: string;
  scopeName: string;
  values?: string[];
}
export interface IoK8sApiCoreV1SeccompProfile {
  localhostProfile?: string;
  type: string;
}
export interface IoK8sApiCoreV1Secret {
  apiVersion?: string;
  data?: {
    [key: string]: unknown;
  };
  immutable?: boolean;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  stringData?: {
    [key: string]: unknown;
  };
  type?: string;
}
export interface IoK8sApiCoreV1SecretEnvSource {
  name?: string;
  optional?: boolean;
}
export interface IoK8sApiCoreV1SecretKeySelector {
  key: string;
  name?: string;
  optional?: boolean;
}
export interface IoK8sApiCoreV1SecretList {
  apiVersion?: string;
  items: IoK8sApiCoreV1Secret[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1SecretProjection {
  items?: IoK8sApiCoreV1KeyToPath[];
  name?: string;
  optional?: boolean;
}
export interface IoK8sApiCoreV1SecretReference {
  name?: string;
  namespace?: string;
}
export interface IoK8sApiCoreV1SecretVolumeSource {
  defaultMode?: number;
  items?: IoK8sApiCoreV1KeyToPath[];
  optional?: boolean;
  secretName?: string;
}
export interface IoK8sApiCoreV1SecurityContext {
  allowPrivilegeEscalation?: boolean;
  capabilities?: IoK8sApiCoreV1Capabilities;
  privileged?: boolean;
  procMount?: string;
  readOnlyRootFilesystem?: boolean;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  runAsUser?: number;
  seLinuxOptions?: IoK8sApiCoreV1SELinuxOptions;
  seccompProfile?: IoK8sApiCoreV1SeccompProfile;
  windowsOptions?: IoK8sApiCoreV1WindowsSecurityContextOptions;
}
export interface IoK8sApiCoreV1Service {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1ServiceSpec;
  status?: IoK8sApiCoreV1ServiceStatus;
}
export interface IoK8sApiCoreV1ServiceAccount {
  apiVersion?: string;
  automountServiceAccountToken?: boolean;
  imagePullSecrets?: IoK8sApiCoreV1LocalObjectReference[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  secrets?: IoK8sApiCoreV1ObjectReference[];
}
export interface IoK8sApiCoreV1ServiceAccountList {
  apiVersion?: string;
  items: IoK8sApiCoreV1ServiceAccount[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1ServiceAccountTokenProjection {
  audience?: string;
  expirationSeconds?: number;
  path: string;
}
export interface IoK8sApiCoreV1ServiceList {
  apiVersion?: string;
  items: IoK8sApiCoreV1Service[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiCoreV1ServicePort {
  appProtocol?: string;
  name?: string;
  nodePort?: number;
  port: number;
  protocol?: string;
  targetPort?: IoK8sApimachineryPkgUtilIntstrIntOrString;
}
export interface IoK8sApiCoreV1ServiceSpec {
  allocateLoadBalancerNodePorts?: boolean;
  clusterIP?: string;
  clusterIPs?: string[];
  externalIPs?: string[];
  externalName?: string;
  externalTrafficPolicy?: string;
  healthCheckNodePort?: number;
  internalTrafficPolicy?: string;
  ipFamilies?: string[];
  ipFamilyPolicy?: string;
  loadBalancerClass?: string;
  loadBalancerIP?: string;
  loadBalancerSourceRanges?: string[];
  ports?: IoK8sApiCoreV1ServicePort[];
  publishNotReadyAddresses?: boolean;
  selector?: {
    [key: string]: unknown;
  };
  sessionAffinity?: string;
  sessionAffinityConfig?: IoK8sApiCoreV1SessionAffinityConfig;
  type?: string;
}
export interface IoK8sApiCoreV1ServiceStatus {
  conditions?: IoK8sApimachineryPkgApisMetaV1Condition[];
  loadBalancer?: IoK8sApiCoreV1LoadBalancerStatus;
}
export interface IoK8sApiCoreV1SessionAffinityConfig {
  clientIP?: IoK8sApiCoreV1ClientIPConfig;
}
export interface IoK8sApiCoreV1StorageOSPersistentVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1ObjectReference;
  volumeName?: string;
  volumeNamespace?: string;
}
export interface IoK8sApiCoreV1StorageOSVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  volumeName?: string;
  volumeNamespace?: string;
}
export interface IoK8sApiCoreV1Sysctl {
  name: string;
  value: string;
}
export interface IoK8sApiCoreV1TCPSocketAction {
  host?: string;
  port: IoK8sApimachineryPkgUtilIntstrIntOrString;
}
export interface IoK8sApiCoreV1Taint {
  effect: string;
  key: string;
  timeAdded?: IoK8sApimachineryPkgApisMetaV1Time;
  value?: string;
}
export interface IoK8sApiCoreV1Toleration {
  effect?: string;
  key?: string;
  operator?: string;
  tolerationSeconds?: number;
  value?: string;
}
export interface IoK8sApiCoreV1TopologySelectorLabelRequirement {
  key: string;
  values: string[];
}
export interface IoK8sApiCoreV1TopologySelectorTerm {
  matchLabelExpressions?: IoK8sApiCoreV1TopologySelectorLabelRequirement[];
}
export interface IoK8sApiCoreV1TopologySpreadConstraint {
  labelSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  maxSkew: number;
  topologyKey: string;
  whenUnsatisfiable: string;
}
export interface IoK8sApiCoreV1TypedLocalObjectReference {
  apiGroup?: string;
  kind: string;
  name: string;
}
export interface IoK8sApiCoreV1Volume {
  awsElasticBlockStore?: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
  azureDisk?: IoK8sApiCoreV1AzureDiskVolumeSource;
  azureFile?: IoK8sApiCoreV1AzureFileVolumeSource;
  cephfs?: IoK8sApiCoreV1CephFSVolumeSource;
  cinder?: IoK8sApiCoreV1CinderVolumeSource;
  configMap?: IoK8sApiCoreV1ConfigMapVolumeSource;
  csi?: IoK8sApiCoreV1CSIVolumeSource;
  downwardAPI?: IoK8sApiCoreV1DownwardAPIVolumeSource;
  emptyDir?: IoK8sApiCoreV1EmptyDirVolumeSource;
  ephemeral?: IoK8sApiCoreV1EphemeralVolumeSource;
  fc?: IoK8sApiCoreV1FCVolumeSource;
  flexVolume?: IoK8sApiCoreV1FlexVolumeSource;
  flocker?: IoK8sApiCoreV1FlockerVolumeSource;
  gcePersistentDisk?: IoK8sApiCoreV1GCEPersistentDiskVolumeSource;
  gitRepo?: IoK8sApiCoreV1GitRepoVolumeSource;
  glusterfs?: IoK8sApiCoreV1GlusterfsVolumeSource;
  hostPath?: IoK8sApiCoreV1HostPathVolumeSource;
  iscsi?: IoK8sApiCoreV1ISCSIVolumeSource;
  name: string;
  nfs?: IoK8sApiCoreV1NFSVolumeSource;
  persistentVolumeClaim?: IoK8sApiCoreV1PersistentVolumeClaimVolumeSource;
  photonPersistentDisk?: IoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
  portworxVolume?: IoK8sApiCoreV1PortworxVolumeSource;
  projected?: IoK8sApiCoreV1ProjectedVolumeSource;
  quobyte?: IoK8sApiCoreV1QuobyteVolumeSource;
  rbd?: IoK8sApiCoreV1RBDVolumeSource;
  scaleIO?: IoK8sApiCoreV1ScaleIOVolumeSource;
  secret?: IoK8sApiCoreV1SecretVolumeSource;
  storageos?: IoK8sApiCoreV1StorageOSVolumeSource;
  vsphereVolume?: IoK8sApiCoreV1VsphereVirtualDiskVolumeSource;
}
export interface IoK8sApiCoreV1VolumeDevice {
  devicePath: string;
  name: string;
}
export interface IoK8sApiCoreV1VolumeMount {
  mountPath: string;
  mountPropagation?: string;
  name: string;
  readOnly?: boolean;
  subPath?: string;
  subPathExpr?: string;
}
export interface IoK8sApiCoreV1VolumeNodeAffinity {
  required?: IoK8sApiCoreV1NodeSelector;
}
export interface IoK8sApiCoreV1VolumeProjection {
  configMap?: IoK8sApiCoreV1ConfigMapProjection;
  downwardAPI?: IoK8sApiCoreV1DownwardAPIProjection;
  secret?: IoK8sApiCoreV1SecretProjection;
  serviceAccountToken?: IoK8sApiCoreV1ServiceAccountTokenProjection;
}
export interface IoK8sApiCoreV1VsphereVirtualDiskVolumeSource {
  fsType?: string;
  storagePolicyID?: string;
  storagePolicyName?: string;
  volumePath: string;
}
export interface IoK8sApiCoreV1WeightedPodAffinityTerm {
  podAffinityTerm: IoK8sApiCoreV1PodAffinityTerm;
  weight: number;
}
export interface IoK8sApiCoreV1WindowsSecurityContextOptions {
  gmsaCredentialSpec?: string;
  gmsaCredentialSpecName?: string;
  hostProcess?: boolean;
  runAsUserName?: string;
}
export interface IoK8sApiDiscoveryV1Endpoint {
  addresses: string[];
  conditions?: IoK8sApiDiscoveryV1EndpointConditions;
  deprecatedTopology?: {
    [key: string]: unknown;
  };
  hints?: IoK8sApiDiscoveryV1EndpointHints;
  hostname?: string;
  nodeName?: string;
  targetRef?: IoK8sApiCoreV1ObjectReference;
  zone?: string;
}
export interface IoK8sApiDiscoveryV1EndpointConditions {
  ready?: boolean;
  serving?: boolean;
  terminating?: boolean;
}
export interface IoK8sApiDiscoveryV1EndpointHints {
  forZones?: IoK8sApiDiscoveryV1ForZone[];
}
export interface IoK8sApiDiscoveryV1EndpointPort {
  appProtocol?: string;
  name?: string;
  port?: number;
  protocol?: string;
}
export interface IoK8sApiDiscoveryV1EndpointSlice {
  addressType: string;
  apiVersion?: string;
  endpoints: IoK8sApiDiscoveryV1Endpoint[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  ports?: IoK8sApiDiscoveryV1EndpointPort[];
}
export interface IoK8sApiDiscoveryV1EndpointSliceList {
  apiVersion?: string;
  items: IoK8sApiDiscoveryV1EndpointSlice[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiDiscoveryV1ForZone {
  name: string;
}
export interface IoK8sApiDiscoveryV1beta1Endpoint {
  addresses: string[];
  conditions?: IoK8sApiDiscoveryV1beta1EndpointConditions;
  hints?: IoK8sApiDiscoveryV1beta1EndpointHints;
  hostname?: string;
  nodeName?: string;
  targetRef?: IoK8sApiCoreV1ObjectReference;
  topology?: {
    [key: string]: unknown;
  };
}
export interface IoK8sApiDiscoveryV1beta1EndpointConditions {
  ready?: boolean;
  serving?: boolean;
  terminating?: boolean;
}
export interface IoK8sApiDiscoveryV1beta1EndpointHints {
  forZones?: IoK8sApiDiscoveryV1beta1ForZone[];
}
export interface IoK8sApiDiscoveryV1beta1EndpointPort {
  appProtocol?: string;
  name?: string;
  port?: number;
  protocol?: string;
}
export interface IoK8sApiDiscoveryV1beta1EndpointSlice {
  addressType: string;
  apiVersion?: string;
  endpoints: IoK8sApiDiscoveryV1beta1Endpoint[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  ports?: IoK8sApiDiscoveryV1beta1EndpointPort[];
}
export interface IoK8sApiDiscoveryV1beta1EndpointSliceList {
  apiVersion?: string;
  items: IoK8sApiDiscoveryV1beta1EndpointSlice[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiDiscoveryV1beta1ForZone {
  name: string;
}
export interface IoK8sApiEventsV1Event {
  action?: string;
  apiVersion?: string;
  deprecatedCount?: number;
  deprecatedFirstTimestamp?: IoK8sApimachineryPkgApisMetaV1Time;
  deprecatedLastTimestamp?: IoK8sApimachineryPkgApisMetaV1Time;
  deprecatedSource?: IoK8sApiCoreV1EventSource;
  eventTime: IoK8sApimachineryPkgApisMetaV1MicroTime;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  note?: string;
  reason?: string;
  regarding?: IoK8sApiCoreV1ObjectReference;
  related?: IoK8sApiCoreV1ObjectReference;
  reportingController?: string;
  reportingInstance?: string;
  series?: IoK8sApiEventsV1EventSeries;
  type?: string;
}
export interface IoK8sApiEventsV1EventList {
  apiVersion?: string;
  items: IoK8sApiEventsV1Event[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiEventsV1EventSeries {
  count: number;
  lastObservedTime: IoK8sApimachineryPkgApisMetaV1MicroTime;
}
export interface IoK8sApiEventsV1beta1Event {
  action?: string;
  apiVersion?: string;
  deprecatedCount?: number;
  deprecatedFirstTimestamp?: IoK8sApimachineryPkgApisMetaV1Time;
  deprecatedLastTimestamp?: IoK8sApimachineryPkgApisMetaV1Time;
  deprecatedSource?: IoK8sApiCoreV1EventSource;
  eventTime: IoK8sApimachineryPkgApisMetaV1MicroTime;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  note?: string;
  reason?: string;
  regarding?: IoK8sApiCoreV1ObjectReference;
  related?: IoK8sApiCoreV1ObjectReference;
  reportingController?: string;
  reportingInstance?: string;
  series?: IoK8sApiEventsV1beta1EventSeries;
  type?: string;
}
export interface IoK8sApiEventsV1beta1EventList {
  apiVersion?: string;
  items: IoK8sApiEventsV1beta1Event[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiEventsV1beta1EventSeries {
  count: number;
  lastObservedTime: IoK8sApimachineryPkgApisMetaV1MicroTime;
}
export interface IoK8sApiFlowcontrolV1beta1FlowDistinguisherMethod {
  type: string;
}
export interface IoK8sApiFlowcontrolV1beta1FlowSchema {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiFlowcontrolV1beta1FlowSchemaSpec;
  status?: IoK8sApiFlowcontrolV1beta1FlowSchemaStatus;
}
export interface IoK8sApiFlowcontrolV1beta1FlowSchemaCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status?: string;
  type?: string;
}
export interface IoK8sApiFlowcontrolV1beta1FlowSchemaList {
  apiVersion?: string;
  items: IoK8sApiFlowcontrolV1beta1FlowSchema[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiFlowcontrolV1beta1FlowSchemaSpec {
  distinguisherMethod?: IoK8sApiFlowcontrolV1beta1FlowDistinguisherMethod;
  matchingPrecedence?: number;
  priorityLevelConfiguration: IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference;
  rules?: IoK8sApiFlowcontrolV1beta1PolicyRulesWithSubjects[];
}
export interface IoK8sApiFlowcontrolV1beta1FlowSchemaStatus {
  conditions?: IoK8sApiFlowcontrolV1beta1FlowSchemaCondition[];
}
export interface IoK8sApiFlowcontrolV1beta1GroupSubject {
  name: string;
}
export interface IoK8sApiFlowcontrolV1beta1LimitResponse {
  queuing?: IoK8sApiFlowcontrolV1beta1QueuingConfiguration;
  type: string;
}
export interface IoK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration {
  assuredConcurrencyShares?: number;
  limitResponse?: IoK8sApiFlowcontrolV1beta1LimitResponse;
}
export interface IoK8sApiFlowcontrolV1beta1NonResourcePolicyRule {
  nonResourceURLs: string[];
  verbs: string[];
}
export interface IoK8sApiFlowcontrolV1beta1PolicyRulesWithSubjects {
  nonResourceRules?: IoK8sApiFlowcontrolV1beta1NonResourcePolicyRule[];
  resourceRules?: IoK8sApiFlowcontrolV1beta1ResourcePolicyRule[];
  subjects: IoK8sApiFlowcontrolV1beta1Subject[];
}
export interface IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec;
  status?: IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus;
}
export interface IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status?: string;
  type?: string;
}
export interface IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList {
  apiVersion?: string;
  items: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference {
  name: string;
}
export interface IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec {
  limited?: IoK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration;
  type: string;
}
export interface IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus {
  conditions?: IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition[];
}
export interface IoK8sApiFlowcontrolV1beta1QueuingConfiguration {
  handSize?: number;
  queueLengthLimit?: number;
  queues?: number;
}
export interface IoK8sApiFlowcontrolV1beta1ResourcePolicyRule {
  apiGroups: string[];
  clusterScope?: boolean;
  namespaces?: string[];
  resources: string[];
  verbs: string[];
}
export interface IoK8sApiFlowcontrolV1beta1ServiceAccountSubject {
  name: string;
  namespace: string;
}
export interface IoK8sApiFlowcontrolV1beta1Subject {
  group?: IoK8sApiFlowcontrolV1beta1GroupSubject;
  kind: string;
  serviceAccount?: IoK8sApiFlowcontrolV1beta1ServiceAccountSubject;
  user?: IoK8sApiFlowcontrolV1beta1UserSubject;
}
export interface IoK8sApiFlowcontrolV1beta1UserSubject {
  name: string;
}
export interface IoK8sApiNetworkingV1HTTPIngressPath {
  backend: IoK8sApiNetworkingV1IngressBackend;
  path?: string;
  pathType: string;
}
export interface IoK8sApiNetworkingV1HTTPIngressRuleValue {
  paths: IoK8sApiNetworkingV1HTTPIngressPath[];
}
export interface IoK8sApiNetworkingV1IPBlock {
  cidr: string;
  except?: string[];
}
export interface IoK8sApiNetworkingV1Ingress {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiNetworkingV1IngressSpec;
  status?: IoK8sApiNetworkingV1IngressStatus;
}
export interface IoK8sApiNetworkingV1IngressBackend {
  resource?: IoK8sApiCoreV1TypedLocalObjectReference;
  service?: IoK8sApiNetworkingV1IngressServiceBackend;
}
export interface IoK8sApiNetworkingV1IngressClass {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiNetworkingV1IngressClassSpec;
}
export interface IoK8sApiNetworkingV1IngressClassList {
  apiVersion?: string;
  items: IoK8sApiNetworkingV1IngressClass[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiNetworkingV1IngressClassParametersReference {
  apiGroup?: string;
  kind: string;
  name: string;
  namespace?: string;
  scope?: string;
}
export interface IoK8sApiNetworkingV1IngressClassSpec {
  controller?: string;
  parameters?: IoK8sApiNetworkingV1IngressClassParametersReference;
}
export interface IoK8sApiNetworkingV1IngressList {
  apiVersion?: string;
  items: IoK8sApiNetworkingV1Ingress[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiNetworkingV1IngressRule {
  host?: string;
  http?: IoK8sApiNetworkingV1HTTPIngressRuleValue;
}
export interface IoK8sApiNetworkingV1IngressServiceBackend {
  name: string;
  port?: IoK8sApiNetworkingV1ServiceBackendPort;
}
export interface IoK8sApiNetworkingV1IngressSpec {
  defaultBackend?: IoK8sApiNetworkingV1IngressBackend;
  ingressClassName?: string;
  rules?: IoK8sApiNetworkingV1IngressRule[];
  tls?: IoK8sApiNetworkingV1IngressTLS[];
}
export interface IoK8sApiNetworkingV1IngressStatus {
  loadBalancer?: IoK8sApiCoreV1LoadBalancerStatus;
}
export interface IoK8sApiNetworkingV1IngressTLS {
  hosts?: string[];
  secretName?: string;
}
export interface IoK8sApiNetworkingV1NetworkPolicy {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiNetworkingV1NetworkPolicySpec;
}
export interface IoK8sApiNetworkingV1NetworkPolicyEgressRule {
  ports?: IoK8sApiNetworkingV1NetworkPolicyPort[];
  to?: IoK8sApiNetworkingV1NetworkPolicyPeer[];
}
export interface IoK8sApiNetworkingV1NetworkPolicyIngressRule {
  from?: IoK8sApiNetworkingV1NetworkPolicyPeer[];
  ports?: IoK8sApiNetworkingV1NetworkPolicyPort[];
}
export interface IoK8sApiNetworkingV1NetworkPolicyList {
  apiVersion?: string;
  items: IoK8sApiNetworkingV1NetworkPolicy[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiNetworkingV1NetworkPolicyPeer {
  ipBlock?: IoK8sApiNetworkingV1IPBlock;
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  podSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
}
export interface IoK8sApiNetworkingV1NetworkPolicyPort {
  endPort?: number;
  port?: IoK8sApimachineryPkgUtilIntstrIntOrString;
  protocol?: string;
}
export interface IoK8sApiNetworkingV1NetworkPolicySpec {
  egress?: IoK8sApiNetworkingV1NetworkPolicyEgressRule[];
  ingress?: IoK8sApiNetworkingV1NetworkPolicyIngressRule[];
  podSelector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  policyTypes?: string[];
}
export interface IoK8sApiNetworkingV1ServiceBackendPort {
  name?: string;
  number?: number;
}
export interface IoK8sApiNodeV1Overhead {
  podFixed?: {
    [key: string]: unknown;
  };
}
export interface IoK8sApiNodeV1RuntimeClass {
  apiVersion?: string;
  handler: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  overhead?: IoK8sApiNodeV1Overhead;
  scheduling?: IoK8sApiNodeV1Scheduling;
}
export interface IoK8sApiNodeV1RuntimeClassList {
  apiVersion?: string;
  items: IoK8sApiNodeV1RuntimeClass[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiNodeV1Scheduling {
  nodeSelector?: {
    [key: string]: unknown;
  };
  tolerations?: IoK8sApiCoreV1Toleration[];
}
export interface IoK8sApiNodeV1beta1Overhead {
  podFixed?: {
    [key: string]: unknown;
  };
}
export interface IoK8sApiNodeV1beta1RuntimeClass {
  apiVersion?: string;
  handler: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  overhead?: IoK8sApiNodeV1beta1Overhead;
  scheduling?: IoK8sApiNodeV1beta1Scheduling;
}
export interface IoK8sApiNodeV1beta1RuntimeClassList {
  apiVersion?: string;
  items: IoK8sApiNodeV1beta1RuntimeClass[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiNodeV1beta1Scheduling {
  nodeSelector?: {
    [key: string]: unknown;
  };
  tolerations?: IoK8sApiCoreV1Toleration[];
}
export interface IoK8sApiPolicyV1Eviction {
  apiVersion?: string;
  deleteOptions?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
}
export interface IoK8sApiPolicyV1PodDisruptionBudget {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiPolicyV1PodDisruptionBudgetSpec;
  status?: IoK8sApiPolicyV1PodDisruptionBudgetStatus;
}
export interface IoK8sApiPolicyV1PodDisruptionBudgetList {
  apiVersion?: string;
  items: IoK8sApiPolicyV1PodDisruptionBudget[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiPolicyV1PodDisruptionBudgetSpec {
  maxUnavailable?: IoK8sApimachineryPkgUtilIntstrIntOrString;
  minAvailable?: IoK8sApimachineryPkgUtilIntstrIntOrString;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
}
export interface IoK8sApiPolicyV1PodDisruptionBudgetStatus {
  conditions?: IoK8sApimachineryPkgApisMetaV1Condition[];
  currentHealthy: number;
  desiredHealthy: number;
  disruptedPods?: {
    [key: string]: unknown;
  };
  disruptionsAllowed: number;
  expectedPods: number;
  observedGeneration?: number;
}
export interface IoK8sApiPolicyV1beta1AllowedCSIDriver {
  name: string;
}
export interface IoK8sApiPolicyV1beta1AllowedFlexVolume {
  driver: string;
}
export interface IoK8sApiPolicyV1beta1AllowedHostPath {
  pathPrefix?: string;
  readOnly?: boolean;
}
export interface IoK8sApiPolicyV1beta1FSGroupStrategyOptions {
  ranges?: IoK8sApiPolicyV1beta1IDRange[];
  rule?: string;
}
export interface IoK8sApiPolicyV1beta1HostPortRange {
  max: number;
  min: number;
}
export interface IoK8sApiPolicyV1beta1IDRange {
  max: number;
  min: number;
}
export interface IoK8sApiPolicyV1beta1PodDisruptionBudget {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec;
  status?: IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus;
}
export interface IoK8sApiPolicyV1beta1PodDisruptionBudgetList {
  apiVersion?: string;
  items: IoK8sApiPolicyV1beta1PodDisruptionBudget[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec {
  maxUnavailable?: IoK8sApimachineryPkgUtilIntstrIntOrString;
  minAvailable?: IoK8sApimachineryPkgUtilIntstrIntOrString;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
}
export interface IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus {
  conditions?: IoK8sApimachineryPkgApisMetaV1Condition[];
  currentHealthy: number;
  desiredHealthy: number;
  disruptedPods?: {
    [key: string]: unknown;
  };
  disruptionsAllowed: number;
  expectedPods: number;
  observedGeneration?: number;
}
export interface IoK8sApiPolicyV1beta1PodSecurityPolicy {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiPolicyV1beta1PodSecurityPolicySpec;
}
export interface IoK8sApiPolicyV1beta1PodSecurityPolicyList {
  apiVersion?: string;
  items: IoK8sApiPolicyV1beta1PodSecurityPolicy[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiPolicyV1beta1PodSecurityPolicySpec {
  allowPrivilegeEscalation?: boolean;
  allowedCSIDrivers?: IoK8sApiPolicyV1beta1AllowedCSIDriver[];
  allowedCapabilities?: string[];
  allowedFlexVolumes?: IoK8sApiPolicyV1beta1AllowedFlexVolume[];
  allowedHostPaths?: IoK8sApiPolicyV1beta1AllowedHostPath[];
  allowedProcMountTypes?: string[];
  allowedUnsafeSysctls?: string[];
  defaultAddCapabilities?: string[];
  defaultAllowPrivilegeEscalation?: boolean;
  forbiddenSysctls?: string[];
  fsGroup: IoK8sApiPolicyV1beta1FSGroupStrategyOptions;
  hostIPC?: boolean;
  hostNetwork?: boolean;
  hostPID?: boolean;
  hostPorts?: IoK8sApiPolicyV1beta1HostPortRange[];
  privileged?: boolean;
  readOnlyRootFilesystem?: boolean;
  requiredDropCapabilities?: string[];
  runAsGroup?: IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions;
  runAsUser: IoK8sApiPolicyV1beta1RunAsUserStrategyOptions;
  runtimeClass?: IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions;
  seLinux: IoK8sApiPolicyV1beta1SELinuxStrategyOptions;
  supplementalGroups: IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions;
  volumes?: string[];
}
export interface IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions {
  ranges?: IoK8sApiPolicyV1beta1IDRange[];
  rule: string;
}
export interface IoK8sApiPolicyV1beta1RunAsUserStrategyOptions {
  ranges?: IoK8sApiPolicyV1beta1IDRange[];
  rule: string;
}
export interface IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions {
  allowedRuntimeClassNames: string[];
  defaultRuntimeClassName?: string;
}
export interface IoK8sApiPolicyV1beta1SELinuxStrategyOptions {
  rule: string;
  seLinuxOptions?: IoK8sApiCoreV1SELinuxOptions;
}
export interface IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions {
  ranges?: IoK8sApiPolicyV1beta1IDRange[];
  rule?: string;
}
export interface IoK8sApiRbacV1AggregationRule {
  clusterRoleSelectors?: IoK8sApimachineryPkgApisMetaV1LabelSelector[];
}
export interface IoK8sApiRbacV1ClusterRole {
  aggregationRule?: IoK8sApiRbacV1AggregationRule;
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  rules?: IoK8sApiRbacV1PolicyRule[];
}
export interface IoK8sApiRbacV1ClusterRoleBinding {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  roleRef: IoK8sApiRbacV1RoleRef;
  subjects?: IoK8sApiRbacV1Subject[];
}
export interface IoK8sApiRbacV1ClusterRoleBindingList {
  apiVersion?: string;
  items: IoK8sApiRbacV1ClusterRoleBinding[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiRbacV1ClusterRoleList {
  apiVersion?: string;
  items: IoK8sApiRbacV1ClusterRole[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiRbacV1PolicyRule {
  apiGroups?: string[];
  nonResourceURLs?: string[];
  resourceNames?: string[];
  resources?: string[];
  verbs: string[];
}
export interface IoK8sApiRbacV1Role {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  rules?: IoK8sApiRbacV1PolicyRule[];
}
export interface IoK8sApiRbacV1RoleBinding {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  roleRef: IoK8sApiRbacV1RoleRef;
  subjects?: IoK8sApiRbacV1Subject[];
}
export interface IoK8sApiRbacV1RoleBindingList {
  apiVersion?: string;
  items: IoK8sApiRbacV1RoleBinding[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiRbacV1RoleList {
  apiVersion?: string;
  items: IoK8sApiRbacV1Role[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiRbacV1RoleRef {
  apiGroup: string;
  kind: string;
  name: string;
}
export interface IoK8sApiRbacV1Subject {
  apiGroup?: string;
  kind: string;
  name: string;
  namespace?: string;
}
export interface IoK8sApiSchedulingV1PriorityClass {
  apiVersion?: string;
  description?: string;
  globalDefault?: boolean;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  preemptionPolicy?: string;
  value: number;
}
export interface IoK8sApiSchedulingV1PriorityClassList {
  apiVersion?: string;
  items: IoK8sApiSchedulingV1PriorityClass[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiStorageV1CSIDriver {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiStorageV1CSIDriverSpec;
}
export interface IoK8sApiStorageV1CSIDriverList {
  apiVersion?: string;
  items: IoK8sApiStorageV1CSIDriver[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiStorageV1CSIDriverSpec {
  attachRequired?: boolean;
  fsGroupPolicy?: string;
  podInfoOnMount?: boolean;
  requiresRepublish?: boolean;
  storageCapacity?: boolean;
  tokenRequests?: IoK8sApiStorageV1TokenRequest[];
  volumeLifecycleModes?: string[];
}
export interface IoK8sApiStorageV1CSINode {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiStorageV1CSINodeSpec;
}
export interface IoK8sApiStorageV1CSINodeDriver {
  allocatable?: IoK8sApiStorageV1VolumeNodeResources;
  name: string;
  nodeID: string;
  topologyKeys?: string[];
}
export interface IoK8sApiStorageV1CSINodeList {
  apiVersion?: string;
  items: IoK8sApiStorageV1CSINode[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiStorageV1CSINodeSpec {
  drivers: IoK8sApiStorageV1CSINodeDriver[];
}
export interface IoK8sApiStorageV1StorageClass {
  allowVolumeExpansion?: boolean;
  allowedTopologies?: IoK8sApiCoreV1TopologySelectorTerm[];
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  mountOptions?: string[];
  parameters?: {
    [key: string]: unknown;
  };
  provisioner: string;
  reclaimPolicy?: string;
  volumeBindingMode?: string;
}
export interface IoK8sApiStorageV1StorageClassList {
  apiVersion?: string;
  items: IoK8sApiStorageV1StorageClass[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiStorageV1TokenRequest {
  audience: string;
  expirationSeconds?: number;
}
export interface IoK8sApiStorageV1VolumeAttachment {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiStorageV1VolumeAttachmentSpec;
  status?: IoK8sApiStorageV1VolumeAttachmentStatus;
}
export interface IoK8sApiStorageV1VolumeAttachmentList {
  apiVersion?: string;
  items: IoK8sApiStorageV1VolumeAttachment[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiStorageV1VolumeAttachmentSource {
  inlineVolumeSpec?: IoK8sApiCoreV1PersistentVolumeSpec;
  persistentVolumeName?: string;
}
export interface IoK8sApiStorageV1VolumeAttachmentSpec {
  attacher: string;
  nodeName: string;
  source: IoK8sApiStorageV1VolumeAttachmentSource;
}
export interface IoK8sApiStorageV1VolumeAttachmentStatus {
  attachError?: IoK8sApiStorageV1VolumeError;
  attached: boolean;
  attachmentMetadata?: {
    [key: string]: unknown;
  };
  detachError?: IoK8sApiStorageV1VolumeError;
}
export interface IoK8sApiStorageV1VolumeError {
  message?: string;
  time?: IoK8sApimachineryPkgApisMetaV1Time;
}
export interface IoK8sApiStorageV1VolumeNodeResources {
  count?: number;
}
export interface IoK8sApiStorageV1beta1CSIStorageCapacity {
  apiVersion?: string;
  capacity?: IoK8sApimachineryPkgApiResourceQuantity;
  kind?: string;
  maximumVolumeSize?: IoK8sApimachineryPkgApiResourceQuantity;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  nodeTopology?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  storageClassName: string;
}
export interface IoK8sApiStorageV1beta1CSIStorageCapacityList {
  apiVersion?: string;
  items: IoK8sApiStorageV1beta1CSIStorageCapacity[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition {
  description?: string;
  format?: string;
  jsonPath: string;
  name: string;
  priority?: number;
  type: string;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion {
  strategy: string;
  webhook?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec;
  status?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList {
  apiVersion?: string;
  items: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames {
  categories?: string[];
  kind: string;
  listKind?: string;
  plural: string;
  shortNames?: string[];
  singular?: string;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec {
  conversion?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion;
  group: string;
  names: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames;
  preserveUnknownFields?: boolean;
  scope: string;
  versions: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion[];
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus {
  acceptedNames?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames;
  conditions?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition[];
  storedVersions?: string[];
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion {
  additionalPrinterColumns?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition[];
  deprecated?: boolean;
  deprecationWarning?: string;
  name: string;
  schema?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation;
  served: boolean;
  storage: boolean;
  subresources?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale {
  labelSelectorPath?: string;
  specReplicasPath: string;
  statusReplicasPath: string;
}
export type IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus = {
  [key: string]: unknown;
};
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources {
  scale?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale;
  status?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation {
  openAPIV3Schema?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation {
  description?: string;
  url?: string;
}
export type IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON = {
  [key: string]: unknown;
};
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps {
  $ref?: string;
  $schema?: string;
  additionalItems?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool;
  additionalProperties?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool;
  allOf?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps[];
  anyOf?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps[];
  default?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON;
  definitions?: {
    [key: string]: unknown;
  };
  dependencies?: {
    [key: string]: unknown;
  };
  description?: string;
  enum?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON[];
  example?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON;
  exclusiveMaximum?: boolean;
  exclusiveMinimum?: boolean;
  externalDocs?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation;
  format?: string;
  id?: string;
  items?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray;
  maxItems?: number;
  maxLength?: number;
  maxProperties?: number;
  maximum?: number;
  minItems?: number;
  minLength?: number;
  minProperties?: number;
  minimum?: number;
  multipleOf?: number;
  not?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps;
  nullable?: boolean;
  oneOf?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps[];
  pattern?: string;
  patternProperties?: {
    [key: string]: unknown;
  };
  properties?: {
    [key: string]: unknown;
  };
  required?: string[];
  title?: string;
  type?: string;
  uniqueItems?: boolean;
  "x-kubernetes-embedded-resource"?: boolean;
  "x-kubernetes-int-or-string"?: boolean;
  "x-kubernetes-list-map-keys"?: string[];
  "x-kubernetes-list-type"?: string;
  "x-kubernetes-map-type"?: string;
  "x-kubernetes-preserve-unknown-fields"?: boolean;
}
export type IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray = any;
export type IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool = {
  title: string;
  type: string;
} | boolean;
export type IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrStringArray = {
  title: string;
  type: string;
} | string[];
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference {
  name: string;
  namespace: string;
  path?: string;
  port?: number;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig {
  caBundle?: string;
  service?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference;
  url?: string;
}
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion {
  clientConfig?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig;
  conversionReviewVersions: string[];
}
export type IoK8sApimachineryPkgApiResourceQuantity = string;
export interface IoK8sApimachineryPkgApisMetaV1APIGroup {
  apiVersion?: string;
  kind?: string;
  name: string;
  preferredVersion?: IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery;
  serverAddressByClientCIDRs?: IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR[];
  versions: IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery[];
}
export interface IoK8sApimachineryPkgApisMetaV1APIGroupList {
  apiVersion?: string;
  groups: IoK8sApimachineryPkgApisMetaV1APIGroup[];
  kind?: string;
}
export interface IoK8sApimachineryPkgApisMetaV1APIResource {
  categories?: string[];
  group?: string;
  kind: string;
  name: string;
  namespaced: boolean;
  shortNames?: string[];
  singularName: string;
  storageVersionHash?: string;
  verbs: string[];
  version?: string;
}
export interface IoK8sApimachineryPkgApisMetaV1APIResourceList {
  apiVersion?: string;
  groupVersion: string;
  kind?: string;
  resources: IoK8sApimachineryPkgApisMetaV1APIResource[];
}
export interface IoK8sApimachineryPkgApisMetaV1APIVersions {
  apiVersion?: string;
  kind?: string;
  serverAddressByClientCIDRs: IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR[];
  versions: string[];
}
export interface IoK8sApimachineryPkgApisMetaV1Condition {
  lastTransitionTime: IoK8sApimachineryPkgApisMetaV1Time;
  message: string;
  observedGeneration?: number;
  reason: string;
  status: string;
  type: string;
}
export interface IoK8sApimachineryPkgApisMetaV1DeleteOptions {
  apiVersion?: string;
  dryRun?: string[];
  gracePeriodSeconds?: number;
  kind?: string;
  orphanDependents?: boolean;
  preconditions?: IoK8sApimachineryPkgApisMetaV1Preconditions;
  propagationPolicy?: string;
}
export type IoK8sApimachineryPkgApisMetaV1FieldsV1 = {
  [key: string]: unknown;
};
export interface IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery {
  groupVersion: string;
  version: string;
}
export interface IoK8sApimachineryPkgApisMetaV1LabelSelector {
  matchExpressions?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[];
  matchLabels?: {
    [key: string]: unknown;
  };
}
export interface IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement {
  key: string;
  operator: string;
  values?: string[];
}
export interface IoK8sApimachineryPkgApisMetaV1ListMeta {
  continue?: string;
  remainingItemCount?: number;
  resourceVersion?: string;
  selfLink?: string;
}
export interface IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry {
  apiVersion?: string;
  fieldsType?: string;
  fieldsV1?: IoK8sApimachineryPkgApisMetaV1FieldsV1;
  manager?: string;
  operation?: string;
  subresource?: string;
  time?: IoK8sApimachineryPkgApisMetaV1Time;
}
export type IoK8sApimachineryPkgApisMetaV1MicroTime = string;
export interface IoK8sApimachineryPkgApisMetaV1ObjectMeta {
  annotations?: {
    [key: string]: unknown;
  };
  clusterName?: string;
  creationTimestamp?: IoK8sApimachineryPkgApisMetaV1Time;
  deletionGracePeriodSeconds?: number;
  deletionTimestamp?: IoK8sApimachineryPkgApisMetaV1Time;
  finalizers?: string[];
  generateName?: string;
  generation?: number;
  labels?: {
    [key: string]: unknown;
  };
  managedFields?: IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry[];
  name?: string;
  namespace?: string;
  ownerReferences?: IoK8sApimachineryPkgApisMetaV1OwnerReference[];
  resourceVersion?: string;
  selfLink?: string;
  uid?: string;
}
export interface IoK8sApimachineryPkgApisMetaV1OwnerReference {
  apiVersion: string;
  blockOwnerDeletion?: boolean;
  controller?: boolean;
  kind: string;
  name: string;
  uid: string;
}
export type IoK8sApimachineryPkgApisMetaV1Patch = {
  [key: string]: unknown;
};
export interface IoK8sApimachineryPkgApisMetaV1Preconditions {
  resourceVersion?: string;
  uid?: string;
}
export interface IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR {
  clientCIDR: string;
  serverAddress: string;
}
export interface IoK8sApimachineryPkgApisMetaV1Status {
  apiVersion?: string;
  code?: number;
  details?: IoK8sApimachineryPkgApisMetaV1StatusDetails;
  kind?: string;
  message?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
  reason?: string;
  status?: string;
}
export interface IoK8sApimachineryPkgApisMetaV1StatusCause {
  field?: string;
  message?: string;
  reason?: string;
}
export interface IoK8sApimachineryPkgApisMetaV1StatusDetails {
  causes?: IoK8sApimachineryPkgApisMetaV1StatusCause[];
  group?: string;
  kind?: string;
  name?: string;
  retryAfterSeconds?: number;
  uid?: string;
}
export type IoK8sApimachineryPkgApisMetaV1Time = string;
export interface IoK8sApimachineryPkgApisMetaV1WatchEvent {
  object: IoK8sApimachineryPkgRuntimeRawExtension;
  type: string;
}
export type IoK8sApimachineryPkgRuntimeRawExtension = {
  [key: string]: unknown;
};
export type IoK8sApimachineryPkgUtilIntstrIntOrString = string;
export interface IoK8sApimachineryPkgVersionInfo {
  buildDate: string;
  compiler: string;
  gitCommit: string;
  gitTreeState: string;
  gitVersion: string;
  goVersion: string;
  major: string;
  minor: string;
  platform: string;
}
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIService {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec;
  status?: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus;
}
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition {
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList {
  apiVersion?: string;
  items: IoK8sKubeAggregatorPkgApisApiregistrationV1APIService[];
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec {
  caBundle?: string;
  group?: string;
  groupPriorityMinimum: number;
  insecureSkipTLSVerify?: boolean;
  service?: IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference;
  version?: string;
  versionPriority: number;
}
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus {
  conditions?: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition[];
}
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference {
  name?: string;
  namespace?: string;
  port?: number;
}
export type Kubernetes = any;