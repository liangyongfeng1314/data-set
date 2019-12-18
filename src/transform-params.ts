import { Options as FilterOptions } from './transform/filter';
import { Options as MapOptions } from './transform/map';
import { Options as PickOptions } from './transform/pick';
import { Options as RenameOptions } from './transform/rename';
import { Options as SortOptions } from './transform/sort';
import { Options as SortByOptions } from './transform/sort-by';
import { Options as SubsetOptions } from './transform/subset';
import { Options as PartitionOptions } from './transform/partition';
import { Options as FoldOptions } from './transform/fold';
import { Options as FillRowsOption } from './transform/fill-rows';
import { Options as ImputeOptions } from './transform/impute';
import { Options as AggregateOptions } from './transform/aggregate';
import { Options as PercentOptions } from './transform/percent';
import { Options as ProportionOptions } from './transform/proportion';
import { Options as RegressionOptions } from './transform/regression';
import { Options as DensityOptions } from './transform/kernel-smooth/density';
import { Options as KernelRegressionOptions } from './transform/kernel-smooth/regression';
import { Options as HistogramOptions } from './transform/bin/histogram';
import { Options as HexagonOptions } from './transform/bin/hexagon';
import { Options as QuantileOptions } from './transform/bin/quantile';
import { Options as RectangleOptions } from './transform/bin/rectangle';
import { Options as TreemapOptions } from './transform/hierarchy/treemap';
import { Options as AdjacencyOptions } from './transform/hierarchy/treemap';
import { Options as VoronoiOptions } from './transform/diagram/voronoi';
import { Options as SankeyOptions } from './transform/diagram/sankey';
import { Options as ArcOptions } from './transform/diagram/arc';
import { Options as RegionOptions } from './transform/geo/region';
import { Options as ProjectionOptions } from './transform/geo/projection';
import { Options as CentroidOptions } from './transform/geo/centroid';

export interface TransformsParams {
  filter: FilterOptions;
  map: MapOptions;
  pick: PickOptions;
  rename: RenameOptions;
  'rename-fields': RenameOptions;
  reverse: {};
  default: {};
  sort: SortOptions;
  sortBy: SortByOptions;
  'sort-by': SortByOptions;
  subset: SubsetOptions;
  partition: PartitionOptions;
  group: PartitionOptions;
  groups: PartitionOptions;
  fold: FoldOptions;
  'fill-rows': FillRowsOption;
  fillRows: FillRowsOption;
  impute: ImputeOptions;
  aggregate: AggregateOptions;
  summary: AggregateOptions;
  percent: PercentOptions;
  proportion: ProportionOptions;
  regression: RegressionOptions;
  'kernel.density': DensityOptions;
  'kernel-smooth.density': DensityOptions;
  'kernel.regression': KernelRegressionOptions;
  'kernel-smooth.regression': KernelRegressionOptions;
  'bin.histogram': HistogramOptions;
  'bin.dot': HistogramOptions;
  'bin.hexagon': HexagonOptions;
  'bin.hex': HexagonOptions;
  hexbin: HexagonOptions;
  'bin.quantile': QuantileOptions;
  'bin.rectangle': RectangleOptions;
  'bin.rect': RectangleOptions;
  treemap: TreemapOptions;
  'hierarchy.treemap': TreemapOptions;
  adjacency: AdjacencyOptions;
  'hierarchy.partition': AdjacencyOptions;
  voronoi: VoronoiOptions;
  'diagram.voronoi': VoronoiOptions;
  'diagram.sankey': SankeyOptions;
  sankey: SankeyOptions;
  'diagram.arc': ArcOptions;
  arc: ArcOptions;
  'geo.region': RegionOptions;
  'geo.projection': ProjectionOptions;
  'geo.centroid': CentroidOptions;
}