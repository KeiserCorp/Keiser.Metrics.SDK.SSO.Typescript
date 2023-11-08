# .A500DataSetData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**epochAt** | **Date** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**testSide** | **string** |  | [optional] [default to undefined]
**leftTestResult** | [**A500TestResultData**](A500TestResultData.md) |  | [optional] [default to undefined]
**rightTestResult** | [**A500TestResultData**](A500TestResultData.md) |  | [optional] [default to undefined]
**a500RepDataPoints** | [**Array&lt;A500RepDataPointData&gt;**](A500RepDataPointData.md) |  | [optional] [default to undefined]
**a500TimeSeriesPoints** | [**Array&lt;A500TimeSeriesPointData&gt;**](A500TimeSeriesPointData.md) |  | [optional] [default to undefined]



## Enum: A500DataSetDataTypeEnum


* `Normal` (value: `'normal'`)

* `Test` (value: `'test'`)





## Enum: A500DataSetDataTestSideEnum


* `Left` (value: `'left'`)

* `Right` (value: `'right'`)

* `Both` (value: `'both'`)



